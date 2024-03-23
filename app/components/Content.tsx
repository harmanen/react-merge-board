'use client';

import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { InfoBox } from './InfoBox';
import { Board } from './Board';
import { Item } from './Board.type';
import { UniqueIdentifier } from '@dnd-kit/core';
import { Box } from '@mui/material';
import styles from '../page.module.css';

// Component
interface mockData {
  width: number;
  height: number;
  boardId: string;
  items: Array<Item | null>;
}

interface Content {
  gridIdList: Array<number>;
  mockData: mockData;
}

export default function Content({ gridIdList, mockData }: Content) {
  const { width, height, items } = mockData;

  // Track locations of items in Content state
  const [itemsOnBoard, setItemsOnBoard] = useState(
    // Add uuids to data to track item movements
    items.map((item) =>
      item === null ? null : { ...item, uuid: uuidv4().slice(0, 8) },
    ),
  );

  // For displaying info of active cell
  const [activeCellIndex, setActiveCellIndex] = useState<
    UniqueIdentifier | undefined
  >(undefined);

  // For detecting clicks outside the app area
  const contentWrapperRef = useRef<HTMLInputElement>(null);

  // Handle cliks outside the app area -> set active cell to undefined
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        contentWrapperRef.current &&
        !contentWrapperRef.current.contains(event.target as Node)
      ) {
        setActiveCellIndex(undefined);
      }
    };
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [contentWrapperRef]);

  return (
    <Box
      className={styles.contentContainer}
      // Dynamically define grid width
      sx={{
        width: `calc(6 * var(--layout-padding) + ${width} * var(--grid-size))`,
      }}
      ref={contentWrapperRef}
    >
      <InfoBox
        activeCellIndex={activeCellIndex}
        setActiveCellIndex={setActiveCellIndex}
        activeItem={
          activeCellIndex === undefined
            ? undefined
            : itemsOnBoard[Number(activeCellIndex)]
        }
        itemsOnBoard={itemsOnBoard}
        setItemsOnBoard={setItemsOnBoard}
      />
      {gridIdList && (
        <Board
          itemsOnBoard={itemsOnBoard}
          setItemsOnBoard={setItemsOnBoard}
          width={width}
          height={height}
          gridIdList={gridIdList}
          activeCellIndex={activeCellIndex}
          setActiveCellIndex={setActiveCellIndex}
        />
      )}
    </Box>
  );
}
