import React from 'react';
import { Box, Typography } from '@mui/material';
import packageJSON from '../../package.json';
import { ItemOnBoard } from './Board.type';
import { UniqueIdentifier } from '@dnd-kit/core';
import './InfoBox.css';
import ScaledTypography from './ScaledTypography';

interface InfoBox {
  activeCellIndex: UniqueIdentifier | undefined;
  activeItem: ItemOnBoard | null | undefined;
}

export function InfoBox({ activeCellIndex, activeItem }: InfoBox) {
  return (
    <Box className="info-container">
      {/* Title */}
      <Typography
        align="center"
        variant="h6"
      >
        Merge board
      </Typography>

      {/* Main content */}
      {activeCellIndex === undefined ? (
        <Box className="no-active-cell-container">
          <ScaledTypography align="center">
            Start by selecting a cell!
          </ScaledTypography>
        </Box>
      ) : (
        <>
          <Typography align="center">Active cell: {activeCellIndex}</Typography>
          <Typography>Data: {JSON.stringify(activeItem)}</Typography>
        </>
      )}

      {/* Version */}
      <ScaledTypography
        className="app-version"
        variant="subtitle2"
      >{`(v${packageJSON.version})`}</ScaledTypography>
    </Box>
  );
}
