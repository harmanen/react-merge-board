'use client';

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
  const { width, height } = mockData;
  return (
    <>
      <InfoBox />
      {gridIdList && (
        <Board
          items={mockData.items}
          width={width}
          height={height}
          gridIdList={gridIdList}
        />
      )}
    </>
  );
}
