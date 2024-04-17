import { UniqueIdentifier } from '@dnd-kit/core';
import { Item } from './mockData.type';

/**
 * Extended types for a data object. Adds a uuid.
 */
export interface ItemOnBoard extends Item {
  uuid: string;
}

/**
 * Type for the function that updates the component state containing the
 * array of the items on the Board.
 */
export interface setItemsOnBoard {
  (newItems: Array<ItemOnBoard | null>): void;
}

/**
 * Type for the function that updates the component state containing the
 * array index of an active (i.e. clieck) cell.
 */
export interface setActiveCellIndex {
  (id: UniqueIdentifier | undefined): void;
}

/**
 * Prop types for the Board component.
 * @property itemsOnBoard - Array of the items on the Board.
 * @property setItemsOnBoard - Function to update the items array in
 * component state.
 * @property width - Number of cells horizontally on the Board.
 * @property height - Number of cells vertically on the Board.
 * @property gridIdList - Generated list of grid IDs.
 * @property activeCellIndex - Array index of the active (i.e. clicked) cell.
 * @property setActiveCellIndex - Function to update the actice cell index in
 * component state.
 */
export interface Board {
  itemsOnBoard: Array<ItemOnBoard | null>;
  setItemsOnBoard: setItemsOnBoard;
  width: number;
  height: number;
  gridIdList: Array<number>;
  activeCellIndex: UniqueIdentifier | undefined;
  setActiveCellIndex: setActiveCellIndex;
}
