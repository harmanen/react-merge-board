import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DroppableGridItem } from '@/app/components/DroppableGridItem';

describe('DroppableGridItem', () => {
  const props = {
    id: 1,
    activeCellIndex: 1,
    activeChainId: '',
    chainId: '',
  };

  it('renders droppable grid item', () => {
    render(<DroppableGridItem {...props}>Test</DroppableGridItem>);
    expect(screen.getByTestId('droppable-grid-item')).toBeInTheDocument();
  });
});
