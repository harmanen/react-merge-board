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

export interface mockData {
  width: number;
  height: number;
  boardId: string;
  items: Array<Item | null>;
}
