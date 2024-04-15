import { UniqueIdentifier } from '@dnd-kit/core';
import { ItemOnBoard, setActiveCellIndex, setItemsOnBoard } from './Board.type';

export interface InitialValues {
  itemType: string;
  chainId: string;
  itemLevel: string;
  isHidden: boolean;
  isInBubble: boolean;
  pausedUntil: string | null;
  createdAt?: string;
}

export interface ItemForm {
  activeCellIndex: UniqueIdentifier | undefined;
  itemsOnBoard: Array<ItemOnBoard | null>;
  setItemsOnBoard: setItemsOnBoard;
  initialValues: InitialValues;
  isMobile: boolean;
}

export interface ItemAddForm extends ItemForm {
  variant: 'add';
  setActiveCellIndex?: never;
}

export interface ItemEditForm extends ItemForm {
  variant: 'edit';
  setActiveCellIndex: setActiveCellIndex;
}
