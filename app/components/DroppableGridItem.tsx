import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Box } from '@mui/material';
import { type DroppableGridItem } from '../types/DroppableGridItem.type';

/**
 * Component for grid elements where draggable elements can be dropped into.
 * - Uses the `useDroppable` hook of the dnd kit.
 * - Handles border visualization for the active cell.
 * - Handles background visualization for cells with the same chain ID as the
 * active item has.
 */
export function DroppableGridItem({
  id,
  activeCellIndex,
  activeChainId,
  chainId,
  children,
}: DroppableGridItem) {
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
    // Active cell border
    border:
      id === activeCellIndex
        ? 'var(--active-cell-border)'
        : 'var(--grid-item-border)',
    // Highlight cells with same chainId
    backgroundColor:
      chainId &&
      activeChainId &&
      activeCellIndex !== undefined &&
      chainId === activeChainId &&
      id !== activeCellIndex
        ? 'var(--grid-bg-chained)'
        : 'inherit',
  };

  return (
    <Box
      ref={setNodeRef}
      style={style}
      className="grid-item-container"
      data-testid="droppable-grid-item"
    >
      {children}
    </Box>
  );
}
