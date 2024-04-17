import { UniqueIdentifier } from '@dnd-kit/core';
import { ItemOnBoard, setActiveCellIndex, setItemsOnBoard } from './Board.type';

/**
 * Prop types for the InfoBox component.
 * @property activeCellIndex - Array index of the active (i.e. clicked) cell.
 * @property setActiveCellIndex - Function to update {@link activeCellIndex}
 * in component state.
 * @property activeItem - Data object for the item at {@link activeCellIndex}
 * (or null for empty cells).
 * @property itemsOnBoard - Array of items on the board.
 * @property setItemsOnBoard - Function to update {@link itemsOnBoard}
 * in component state.
 * @property isMobile - Is viewport width considered to belong to a mobile device.
 */
export interface InfoBox {
  activeCellIndex: UniqueIdentifier | undefined;
  setActiveCellIndex: setActiveCellIndex;
  activeItem: ItemOnBoard | null | undefined;
  itemsOnBoard: Array<ItemOnBoard | null>;
  setItemsOnBoard: setItemsOnBoard;
  isMobile: boolean;
}
