import React from 'react';
import { Grid } from '@mui/material';
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { DroppableGridItem } from './DroppableGridItem';
import styles from '../page.module.css';
import { DraggableIconItem } from './DraggableIconItem';
import type Board from './Board.type';
import getBorder from '../helpers/getBorder';

export function Board({
  itemsOnBoard,
  setItemsOnBoard,
  width,
  height,
  gridIdList,
  setActiveCellIndex,
}: Board) {
  // Define sensor types for DnD
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

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
      const newItems = [...itemsOnBoard];
      newItems[sourceIndex] = targetItem;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      newItems[targetIndex] = sourceItem!;

      setItemsOnBoard(newItems);
    }

    // Update active cell
    setActiveCellIndex(event.over?.id);
  };

  // Handle dragging (or clicking) of items
  const handleDragStart = (event: DragStartEvent) => {
    setActiveCellIndex(event.active.data.current?.index);
  };

  return (
    <DndContext
      id={'board-dnd-context'}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
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
              // Empty cells, DndContext drag start/end defines the rest
              onClick={() =>
                itemsOnBoard[index] === null ? setActiveCellIndex(index) : null
              }
            >
              <DroppableGridItem id={gridId}>
                {iconItem && (
                  <DraggableIconItem
                    // Generate unique ids on the fly
                    id={iconItem.uuid}
                    iconItem={iconItem}
                    index={index}
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
