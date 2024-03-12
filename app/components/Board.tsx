'use client';

import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { DndContext } from '@dnd-kit/core';
import { DroppableGridItem } from './DroppableGridItem';
import styles from '../page.module.css';
import { DraggableIconItem } from './DraggableIconItem';

export function Board({ width, height, gridIdList }) {
  // Implement dropping to grid

  // const handleDragEnd = (event) => {
  //   if (event.over && event.over.id === 'test') {
  //     setIsDropped(true);
  //   }
  // };

  return (
    <DndContext
      id={'board-dnd-context'}
      // onDragEnd={handleDragEnd} TBD
    >
      <Grid
        columns={width}
        container
        className={styles.gridContainer}
        // Dynamically define grid height
        sx={{
          maxHeight: `calc(6 * var(--layout-padding) + ${height} * var(--grid-size))`,
        }}
      >
        {gridIdList.map((item, index) => (
          <Grid
            item
            xs={1}
            key={item}
            className={
              index % 2 === 0 ? styles.gridItemDark : styles.gridItemLight
            }
          >
            <DroppableGridItem>
              {item} {index === 0 && <DraggableIconItem id="test" />}
            </DroppableGridItem>
          </Grid>
        ))}
      </Grid>
    </DndContext>
  );
}
