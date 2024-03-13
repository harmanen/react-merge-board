import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { CSS } from '@dnd-kit/utilities';
import GenericProps from './GenericProps.type';

interface Props extends GenericProps {
  iconId: number;
}

export function DraggableIconItem({ id, children, iconId }: Props) {
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
      style={style}
      {...listeners}
      {...attributes}
    >
      <StarIcon sx={{ color: 'red' }} />
      {children}
      {iconId}
    </Button>
  );
}
