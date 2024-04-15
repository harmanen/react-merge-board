import { ReactNode } from 'react';

type Variant = 'bubble' | 'hidden';

/**
 * Prop types for the IconWrapper component.
 * @property children - Optional React node(s) passed as children to the component.
 * @property variant - Wrapper variant: `bubble` or `hidden`.
 */
export interface IconWrapper {
  children: ReactNode;
  variant: Variant;
}
