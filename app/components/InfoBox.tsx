import React from 'react';
import { Box } from '@mui/material';
import styles from '../page.module.css';
import packageJSON from '../../package.json';
import { ItemOnBoard } from './Board.type';
import { UniqueIdentifier } from '@dnd-kit/core';

interface InfoBox {
  activeCellIndex: UniqueIdentifier | undefined;
  activeItem: ItemOnBoard | null | undefined;
}

export function InfoBox({ activeCellIndex, activeItem }: InfoBox) {
  return (
    <Box className={styles.infoContainer}>
      `THIS IS VERSION {packageJSON.version} AND VERY MUCH WORK IN PROGRESS!
      Items can be moved around, though`
    </Box>
  );
}
