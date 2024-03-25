import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Box, IconButton } from '@mui/material';
import { CSS } from '@dnd-kit/utilities';
import GenericProps from './GenericProps.type';
import itemInfo, { item } from '../constants/itemInfo';
import { Block } from '@mui/icons-material';
import { Item } from './Board.type';
import { ItemTier } from './ItemTier';
import tierColorMap from '../constants/tierColorMap';
import IconWrapper from './IconWrapper';

interface Props extends GenericProps {
  iconItem: Item;
  index: number;
  isHidden: boolean;
  isInBubble: boolean | undefined;
}

export function DraggableIconItem({
  id,
  iconItem,
  index,
  isHidden = false,
  isInBubble = false,
  children,
}: Props) {
  // Helper functions
  const getIcon = (item: item) => {
    // Get icon or use default if missing
    const unwrappedIcon = item.icon || <Block sx={{ color: 'red' }} />;

    // Special case(s) handled separately
    if (isHidden) {
      return <IconWrapper variant="hidden">{unwrappedIcon}</IconWrapper>;
    } else if (isInBubble) {
      return <IconWrapper variant="bubble">{unwrappedIcon}</IconWrapper>;
    } else {
      return unwrappedIcon;
    }
  };

  // Component
  const { itemId, itemLevel } = iconItem;

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: {
      type: 'item',
      // Used to set active cell. Same as "id" for droppable containers
      index: index,
    },
  });

  // Handle movement
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  // Icon shadow
  let filter = `drop-shadow(0.1rem 0.2rem 0.3rem ${tierColorMap[itemLevel]})`;

  if (isHidden) {
    filter = '';
  }

  return (
    <IconButton
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      disableRipple
      className="icon-button"
    >
      <Box
        className="icon-container"
        style={{
          filter: filter,
        }}
      >
        {getIcon(itemInfo[itemId])}
      </Box>
      <ItemTier itemLevel={itemLevel} />
      {children}
    </IconButton>
  );
}
