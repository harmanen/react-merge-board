import { UniqueIdentifier } from '@dnd-kit/core';
import GenericProps from './GenericProps.type';

export interface DroppableGridItem extends GenericProps {
  activeCellIndex: UniqueIdentifier | undefined;
  activeChainId: string | undefined;
  chainId: string | undefined;
}
