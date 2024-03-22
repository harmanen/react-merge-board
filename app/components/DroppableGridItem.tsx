import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import GenericProps from './GenericProps.type';
import { Box } from '@mui/material';

export function DroppableGridItem({ id, children }: GenericProps) {
  const { setNodeRef } = useDroppable({
    // Note that "id" is the same as the array index of the container
    id,
    data: {
      type: 'container',
    },
  });

  const style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Box
      ref={setNodeRef}
      style={style}
      className="grid-item-container"
    >
      {children}
    </Box>
  );
}
