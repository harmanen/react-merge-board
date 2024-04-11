import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DroppableGridItem } from '@/app/components/DroppableGridItem';

describe('DroppableGridItem', () => {
  it('renders droppable grid item without chain info', () => {
    render(
      <DroppableGridItem
        id={1}
        activeCellIndex={1}
        activeChainId={undefined}
        chainId={undefined}
      >
        Test
      </DroppableGridItem>,
    );
    expect(screen.getByTestId('droppable-grid-item')).toBeInTheDocument();
  });

  it('renders droppable grid item with chain info (active cell)', () => {
    render(
      <DroppableGridItem
        id={1}
        activeCellIndex={1}
        activeChainId={'test'}
        chainId={'test'}
      >
        Test
      </DroppableGridItem>,
    );
    expect(screen.getByTestId('droppable-grid-item')).toBeInTheDocument();
  });

  it('renders droppable grid item with chain info (inactive cell)', () => {
    render(
      <DroppableGridItem
        id={1}
        activeCellIndex={2}
        activeChainId={'test'}
        chainId={'test'}
      >
        Test
      </DroppableGridItem>,
    );
    expect(screen.getByTestId('droppable-grid-item')).toBeInTheDocument();
  });
});
