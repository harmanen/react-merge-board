import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function DroppableGridItem({ id, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
    >
      {children}
    </div>
  );
}
