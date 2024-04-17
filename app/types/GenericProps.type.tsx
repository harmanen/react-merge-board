import { ReactNode } from 'react';
import { UniqueIdentifier } from '@dnd-kit/core';

/**
 * Types for the common props for the drag-and-drop components using the dnd-kit.
 * @property id - Unique ID used by the `useDroppable` and `useDraggable` hooks.
 * **Note:** IDs for the useDroppables are generated based on the grid size
 * whereas useDroppables receive UUIDs generated on on the fly.
 * @property children - Optional React node(s) passed as children to the component.
 */
export default interface GenericProps {
  id: UniqueIdentifier;
  children?: ReactNode;
}
