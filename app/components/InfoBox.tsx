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
        className="title"
        variant="h1"
      >
        Merge board
      </Typography>
      <Typography
        className="version"
        variant="subtitle1"
      >{`Version ${packageJSON.version}`}</Typography>
    </Box>
  );
}
