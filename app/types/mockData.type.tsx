/**
 * Types for an object containing item data.
 * @property itemId - An ID for an item
 * (unique for each type and level combination).
 * @property itemType - Item type (including level).
 * Different items are displayed with different icons in the UI.
 * @property chainId - An ID for visualizing similar items in the UI.
 * @property pausedUntil - Timestamp in ISO 8601 format.
 * Can be edited but is not visualized.
 * @property createdAt - Creation timestamp in ISO 8601 format.
 * Visualized but cannot be edited and should not change at any point.
 * @property visibility - Item visibility (`visible` or `hidden`).
 * Hidden items are indicated in the UI.
 * @property itemLevel - Level of an item.
 * This is displayed in the UI as a number and as a shadow color of an item.
 * @property isInsideBubble - Defines if an item is in a bubble.
 * For items with value `true`, the item icon is displayed in a bubble.
 */
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

/**
 * Types for an input data object.
 * @property width - Amount of cells horizontally on the Board.
 * @property height - Amount of cells vertically on the Board.
 * @property boardId - An ID for the Board.
 * @property items - An array of items or nulls (empty cells).
 */
export interface mockData {
  width: number;
  height: number;
  boardId: string;
  items: Array<Item | null>;
}
