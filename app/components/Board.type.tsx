export interface Item {
  itemId: number;
  itemType: string;
  chainId: string;
  pausedUntil: string | null;
  createdAt: string;
  visibility: string;
  itemLevel: number;
  isInsideBubble: Boolean;
}

interface ItemOnBoard extends Item {
  uuid: string;
}

export default interface Board {
  itemsOnBoard: Array<ItemOnBoard | null>;
  setItemsOnBoard: Function;
  width: number;
  height: number;
  gridIdList: Array<number>;
  setActiveCellIndex: Function;
}
