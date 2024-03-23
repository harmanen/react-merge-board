import { UniqueIdentifier } from '@dnd-kit/core';

export interface Item {
  itemId: number;
  itemType: string;
  chainId: string;
  pausedUntil: string | null;
  createdAt: string;
  visibility: string;
  itemLevel: number;
  isInsideBubble: boolean;
}

export interface ItemOnBoard extends Item {
  uuid: string;
}

export interface setItemsOnBoard {
  (newItems: Array<ItemOnBoard | null>): void;
}

export interface setActiveCellIndex {
  (id: UniqueIdentifier | undefined): void;
}

export default interface Board {
  itemsOnBoard: Array<ItemOnBoard | null>;
  setItemsOnBoard: setItemsOnBoard;
  width: number;
  height: number;
  gridIdList: Array<number>;
  activeCellIndex: UniqueIdentifier | undefined;
  setActiveCellIndex: setActiveCellIndex;
}
