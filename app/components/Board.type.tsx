interface Item {
  itemId: number;
  itemType: string;
  chainId: string;
  pausedUntil: string | null;
  createdAt: string;
  visibility: string;
  itemLevel: number;
  isInsideBubble: Boolean;
}

export default interface Board {
  items: Array<Item | null>;
  width: number;
  height: number;
  gridIdList: Array<number>;
}
