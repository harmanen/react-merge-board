'use client';

import React, { useState } from 'react';
import { Grid } from '@mui/material';
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';
import { DroppableGridItem } from './DroppableGridItem';
import styles from '../page.module.css';
import { DraggableIconItem } from './DraggableIconItem';
import type Board from './Board.type';
import getBorder from '../helpers/getBorder';

export function Board({ items, width, height, gridIdList }: Board) {
  // Define sensor types for DnD
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  // Track locations of items using component state
  const [itemsOnBoard, setItemsOnBoard] = useState(
    // Add uuids to data to track item movements
    items.map((item) =>
      item === null ? null : { ...item, uuid: uuidv4().slice(0, 8) },
    ),
  );

  // Handle dropping of items
  const handleDragEnd = (event: DragEndEvent) => {
    // Target index is the grid id
    const targetIndex = event.over?.id;
    const targetItem = itemsOnBoard[targetIndex as number];

    // Find source index with the item uuid
    const sourceItem = itemsOnBoard.find(
      (item) => item?.uuid === event.active.id,
    );

    const sourceIndex = sourceItem && itemsOnBoard.indexOf(sourceItem);

    // Update array if indices exist
    if (typeof targetIndex === 'number' && typeof sourceIndex === 'number') {
      let newItems = [...itemsOnBoard];
      newItems[sourceIndex] = targetItem;
      newItems[targetIndex] = sourceItem!;

      setItemsOnBoard(newItems);
    }
  };

  return (
    <DndContext
      id={'board-dnd-context'}
      onDragEnd={handleDragEnd}
      sensors={sensors}
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
        {gridIdList.map((gridId, index) => {
          const iconItem = itemsOnBoard[index];

          return (
            <Grid
              item
              xs={1}
              key={index}
              className={
                index % 2 === 0 ? styles.gridItemDark : styles.gridItemLight
              }
              sx={getBorder(index, width, height)}
            >
              <DroppableGridItem id={gridId}>
                {iconItem && (
                  <DraggableIconItem
                    // Generate unique ids on the fly
                    id={iconItem.uuid}
                    iconItem={iconItem}
                    isHidden={itemsOnBoard[index]?.visibility === 'hidden'}
                    isInBubble={itemsOnBoard[index]?.isInsideBubble}
                  />
                )}
              </DroppableGridItem>
            </Grid>
          );
        })}
      </Grid>
    </DndContext>
  );
}
