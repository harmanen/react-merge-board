import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { CSS } from '@dnd-kit/utilities';
import GenericProps from './GenericProps.type';

export function DraggableIconItem({ id, children }: GenericProps) {
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
    <Button
      ref={setNodeRef}
      style={{ ...style, position: 'absolute' }}
      {...listeners}
      {...attributes}
    >
      <StarIcon sx={{ color: 'red' }}>{children}</StarIcon>
    </Button>
  );
}
