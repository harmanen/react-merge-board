import { UniqueIdentifier } from '@dnd-kit/core';
import { ItemOnBoard, setActiveCellIndex, setItemsOnBoard } from './Board.type';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { type Item } from './mockData.type';

/**
 * Types for initial values of an ItemForm.
 *
 * @property itemType - Item type.
 * @property chainId - Chain ID.
 * @property itemLevel - Item level.
 * @property isHidden - Does item have status `hidden`.
 * @property isInBubble - Does item have status `in bubble`.
 * @property pausedUntil - Timestamp in ISO 8601 format.
 * @property createdAt - Creation timestamp in ISO 8601 format.
 * @see {@link Item}
 */
export interface InitialValues {
  itemType: string;
  chainId: string;
  itemLevel: string;
  isHidden: boolean;
  isInBubble: boolean;
  pausedUntil: string | null;
  createdAt?: string;
}

/**
 * Generic prop types for form components.
 * @property activeCellIndex - Array index of the active (i.e. clicked) cell.
 * @property itemsOnBoard - Array containing item objects
 * (or nulls for empty cells).
 * @property setItemsOnBoard - Function to update items list on the component
 * state
 * @property initialValues - Initial values for the form.
 * @property isMobile - Is the viewport width considered to be small enough
 * for a mobile device.
 */
export interface ItemForm {
  activeCellIndex: UniqueIdentifier | undefined;
  itemsOnBoard: Array<ItemOnBoard | null>;
  setItemsOnBoard: setItemsOnBoard;
  initialValues: InitialValues;
  isMobile: boolean;
}

/**
 * Extended prop types for the add variant of the ItemForm.
 * @property variant - This type is used if variant equals to `add`.
 * @property setActiveCellIndex - Set to `never` (required by {@link ItemEditForm}).
 */
export interface ItemAddForm extends ItemForm {
  variant: 'add';
  setActiveCellIndex?: never;
}

/**
 * Extended prop types for the edit variant of the ItemForm.
 * @property variant - This type is used if variant equals to `edit`.
 * @property setActiveCellIndex - Function to update the index of
 * an active cell.
 */
export interface ItemEditForm extends ItemForm {
  variant: 'edit';
  setActiveCellIndex: setActiveCellIndex;
}
