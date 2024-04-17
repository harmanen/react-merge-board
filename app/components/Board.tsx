import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { DroppableGridItem } from './DroppableGridItem';
import styles from '../page.module.css';
import { DraggableIconItem } from './DraggableIconItem';
import { type Board } from '../types/Board.type';
import getBorder from '../helpers/getBorder';

/**
 * Lower major element of the app.
 * - Holds the state for the `chainId` of an active (i.e. clicked) item.
 * - Handles setting of the abovementioned state in case an empty cell,
 * a cell with an item, or outside of the app area is clicked.
 * - Defines handler functions for start and end of drag-and-drop events.
 * - Based on input props, renders a grid (or board) of droppable cells
 * ({@link DroppableGridItem} components) and occupies them with icon items
 * ({@link DraggableIconItem} components).
 * - Wraps everything in DndContext.
 */
export function Board({
  itemsOnBoard,
  setItemsOnBoard,
  width,
  height,
  gridIdList,
  activeCellIndex,
  setActiveCellIndex,
}: Board) {
  // Set chainId of an active cell for visualisation
  const [activeChainId, setActiveChainId] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    const activeItem = itemsOnBoard[Number(activeCellIndex)];

    // Cell with an item clicked
    if (activeItem) {
      setActiveChainId(activeItem.chainId);
    }

    // Empty cell clicked
    if (!activeItem) {
      setActiveChainId(undefined);
    }

    // Outside of board clicked
    if (activeItem && activeCellIndex === undefined) {
      setActiveChainId(undefined);
    }
  }, [itemsOnBoard, activeCellIndex]);

  // Handle dropping of items
  const handleDragEnd = (event: DragEndEvent) => {
    if (event.over && event.active) {
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
    }
  };

  // Handle dragging (or clicking) of items
  const handleDragStart = (event: DragStartEvent) => {
    if (event.active) {
      setActiveCellIndex(event.active.data.current?.index);
    }
  };

  return (
    <DndContext
      id={'board-dnd-context'}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
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
              // Select active cell
              onPointerDown={() =>
                iconItem === null ? setActiveCellIndex(index) : null
              }
            >
              <DroppableGridItem
                id={gridId}
                activeCellIndex={activeCellIndex}
                activeChainId={activeChainId}
                chainId={iconItem?.chainId}
              >
                {iconItem && (
                  <DraggableIconItem
                    // Generate unique ids on the fly
                    id={iconItem.uuid}
                    iconItem={iconItem}
                    index={index}
                    isHidden={iconItem?.visibility === 'hidden'}
                    isInBubble={iconItem?.isInsideBubble}
                    isActive={index === activeCellIndex}
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
