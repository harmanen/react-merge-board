import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Box, IconButton } from '@mui/material';
import { CSS } from '@dnd-kit/utilities';
import GenericProps from './GenericProps.type';
import itemInfo, { item } from '../constants/itemInfo';
import { Block, VisibilityOff } from '@mui/icons-material';
import { Item } from './Board.type';
import { ItemTier } from './ItemTier';
import tierColorMap from '../constants/tierColorMap';

interface Props extends GenericProps {
  iconItem: Item;
  isHidden: boolean;
}

export function DraggableIconItem({
  id,
  iconItem,
  isHidden = false,
  children,
}: Props) {
  // Helper functions
  const getIcon = (item: item) => {
    // Get icon or use default if missing
    // Special case(s) handled separately
    if (isHidden) {
      return <VisibilityOff sx={{ color: 'gray', opacity: 0.6 }} />;
    } else {
      return item.icon || <Block sx={{ color: 'red' }} />;
    }
  };

  // Component
  const { itemId, itemLevel } = iconItem;

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: {
      type: 'item',
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
      {!isHidden && <ItemTier itemLevel={itemLevel} />}
      {children}
    </IconButton>
  );
}
