'use client';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { InfoBox } from './InfoBox';
import { Board } from './Board';
import { Item } from './Board.type';

interface mockData {
  width: number;
  height: number;
  boardId: String;
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

  return (
    <>
      <InfoBox />
      {gridIdList && (
        <Board
          itemsOnBoard={itemsOnBoard}
          setItemsOnBoard={setItemsOnBoard}
          width={width}
          height={height}
          gridIdList={gridIdList}
        />
      )}
    </>
  );
}
