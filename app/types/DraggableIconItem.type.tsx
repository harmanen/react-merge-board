import GenericProps from './GenericProps.type';
import { Item } from './mockData.type';

export interface DraggableIconItem extends GenericProps {
  iconItem: Item;
  index: number;
  isHidden: boolean;
  isInBubble: boolean | undefined;
  isActive: boolean;
}
