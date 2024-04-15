import { UniqueIdentifier } from '@dnd-kit/core';
import { Item } from './mockData.type';

export interface ItemOnBoard extends Item {
  uuid: string;
}

export interface setItemsOnBoard {
  (newItems: Array<ItemOnBoard | null>): void;
}

export interface setActiveCellIndex {
  (id: UniqueIdentifier | undefined): void;
}

export interface Board {
  itemsOnBoard: Array<ItemOnBoard | null>;
  setItemsOnBoard: setItemsOnBoard;
  width: number;
  height: number;
  gridIdList: Array<number>;
  activeCellIndex: UniqueIdentifier | undefined;
  setActiveCellIndex: setActiveCellIndex;
}
