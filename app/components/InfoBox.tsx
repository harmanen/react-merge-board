import React from 'react';
import { Box } from '@mui/material';
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
      `THIS IS VERSION {packageJSON.version} AND VERY MUCH WORK IN PROGRESS!
      Items can be moved around, though`
    </Box>
  );
}
