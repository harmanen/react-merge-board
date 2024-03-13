import React from 'react';
import { Box } from '@mui/material';
import styles from '../page.module.css';
import packageJSON from '../../package.json';

export function InfoBox() {
  return (
    <Box className={styles.infoContainer}>
      `THIS IS VERSION {packageJSON.version} AND VERY MUCH WORK IN PROGRESS!
      Items can be moved around, though`
    </Box>
  );
}
