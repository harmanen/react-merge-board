import React from 'react';
import { Box } from '@mui/material';
import styles from '../page.module.css';
import packageJSON from '../../package.json';
import { ItemOnBoard } from './Board.type';

// Bugged
// eslint-disable-next-line no-unused-vars
interface InfoBox {
  activeCellIndex: Number | undefined;
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
