import GenericProps from './GenericProps.type';
import { Item } from './mockData.type';

/**
 * Prop types for the DraggableIconItem component.
 * @property iconItem - Object containing item data.
 * @property index - Array index of the cell where the item is.
 * @property isHidden - Is item hidden.
 * @property isInBubble - Is item in a bubble.
 * @property isActive - Is this the active item.
 */
export interface DraggableIconItem extends GenericProps {
  iconItem: Item;
  index: number;
  isHidden: boolean;
  isInBubble: boolean | undefined;
  isActive: boolean;
}
