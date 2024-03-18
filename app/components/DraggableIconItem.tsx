import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Box, IconButton } from '@mui/material';
import { CSS } from '@dnd-kit/utilities';
import GenericProps from './GenericProps.type';
import itemInfo from '../constants/itemInfo';
import { Block } from '@mui/icons-material';
import { Item } from './Board.type';
import { ItemTier } from './ItemTier';
import tierColorMap from '../constants/tierColorMap';

interface Props extends GenericProps {
  iconItem: Item;
}

export function DraggableIconItem({ id, iconItem, children }: Props) {
  const { itemId, itemLevel } = iconItem;

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: {
      type: 'item',
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <IconButton
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      disableRipple
      className="icon-button"
    >
      {/* Get icon or use default if missing */}
      <Box
        className="icon-container"
        style={{
          filter: `drop-shadow(0.1rem 0.2rem 0.3rem ${tierColorMap[itemLevel]})`,
        }}
      >
        {itemInfo[itemId].icon || <Block sx={{ color: 'red' }} />}
      </Box>
      <ItemTier itemLevel={itemLevel} />
      {children}
    </IconButton>
  );
}
