import React from 'react';
import { Box, Typography } from '@mui/material';
import packageJSON from '../../package.json';
import { ItemOnBoard } from './Board.type';
import { UniqueIdentifier } from '@dnd-kit/core';
import './InfoBox.css';

interface InfoBox {
  activeCellIndex: UniqueIdentifier | undefined;
  activeItem: ItemOnBoard | null | undefined;
}

export function InfoBox({ activeCellIndex, activeItem }: InfoBox) {
  return (
    <Box className="info-container">
      <Typography
        align="center"
        variant="h6"
      >
        Merge board
      </Typography>
      <Typography align="center">Active cell: {activeCellIndex}</Typography>
      <Typography>Data: {JSON.stringify(activeItem)}</Typography>
      <Typography
        className="app-version"
        variant="subtitle2"
      >{`(v${packageJSON.version})`}</Typography>
    </Box>
  );
}
