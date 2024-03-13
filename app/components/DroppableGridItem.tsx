import React, { ReactNode } from 'react';
import { useDroppable } from '@dnd-kit/core';

type Props = {
  id: string;
  children: ReactNode;
};

export function DroppableGridItem({ id, children }: Props) {
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
