import { ReactNode } from 'react';

type Variant = 'bubble' | 'hidden';

export interface IconWrapper {
  children: ReactNode;
  variant: Variant;
}
