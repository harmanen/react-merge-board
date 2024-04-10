import React from 'react';
import { UniqueIdentifier, useDroppable } from '@dnd-kit/core';
import GenericProps from './GenericProps.type';
import { Box } from '@mui/material';

interface Props extends GenericProps {
  activeCellIndex: UniqueIdentifier | undefined;
  activeChainId: string | undefined;
  chainId: string | undefined;
}

export function DroppableGridItem({
  id,
  activeCellIndex,
  activeChainId,
  chainId,
  children,
}: Props) {
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
      activeCellIndex &&
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
    >
      {children}
    </Box>
  );
}
