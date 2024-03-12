import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export function DraggableIconItem({ id, children }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <Box
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <StarIcon sx={{ color: 'red' }}>{children}</StarIcon>
    </Box>
  );
}
