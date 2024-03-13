import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import GenericProps from './GenericProps.type';

export function DroppableGridItem({ id, children }: GenericProps) {
  const { isOver, setNodeRef } = useDroppable({
    id,
    data: {
      type: 'container',
    },
  });

  const style = {
    // opacity: isOver ? 1 : 0.5, // TBD
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
