import { ReactNode } from 'react';
import { UniqueIdentifier } from '@dnd-kit/core';

export default interface GenericProps {
  id: UniqueIdentifier;
  children?: ReactNode;
}
