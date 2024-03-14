import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { IconButton } from '@mui/material';
import { CSS } from '@dnd-kit/utilities';
import GenericProps from './GenericProps.type';
import itemInfo from '../constants/itemInfo';
import { Block } from '@mui/icons-material';

interface Props extends GenericProps {
  itemId: number;
}

export function DraggableIconItem({ id, children, itemId }: Props) {
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
      {itemInfo[itemId].icon || <Block sx={{ color: 'red' }} />}
      {children}
    </IconButton>
  );
}
