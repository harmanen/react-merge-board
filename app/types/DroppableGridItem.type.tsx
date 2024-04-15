import { UniqueIdentifier } from '@dnd-kit/core';
import GenericProps from './GenericProps.type';

/**
 * Prop types for the DroppableGridItem component.
 * @property activeCellIndex - Array index of an active (i.e. clicked) cell.
 * @property activeChainId - Value of the `chainId` of an active (i.e. clicked) item.
 * @property chainId - Value of the `chainId` of the item currently located in
 * the grid cell in question.
 */
export interface DroppableGridItem extends GenericProps {
  activeCellIndex: UniqueIdentifier | undefined;
  activeChainId: string | undefined;
  chainId: string | undefined;
}
