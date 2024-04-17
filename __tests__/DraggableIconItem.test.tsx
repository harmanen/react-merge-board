/**
 * Render tests for the DraggableIconItem component.
 * @module
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DraggableIconItem } from '@/app/components/DraggableIconItem';
import mockData from '@/app/data';
import { Item } from '@/app/types/mockData.type';

describe('DraggableIconItem', () => {
  const props = {
    id: 1,
    iconItem: mockData.items[0] as Item,
    index: 1,
    isHidden: false,
    isInBubble: false,
    isActive: true,
  };

  it('renders droppable grid item (active) as is', () => {
    render(<DraggableIconItem {...props}>Test</DraggableIconItem>);
    expect(screen.getByTestId('draggable-icon-item')).toBeInTheDocument();
  });

  it('renders droppable grid item (inactive) as is', () => {
    render(
      <DraggableIconItem
        {...props}
        isActive={false}
      >
        Test
      </DraggableIconItem>,
    );
    expect(screen.getByTestId('draggable-icon-item')).toBeInTheDocument();
  });

  it('renders droppable grid item (active) as hidden', () => {
    render(
      <DraggableIconItem
        {...props}
        isHidden
      >
        Test
      </DraggableIconItem>,
    );
    expect(screen.getByTestId('draggable-icon-item')).toBeInTheDocument();
  });

  it('renders droppable grid item (active) as in bubble', () => {
    render(
      <DraggableIconItem
        {...props}
        isInBubble
      >
        Test
      </DraggableIconItem>,
    );
    expect(screen.getByTestId('draggable-icon-item')).toBeInTheDocument();
  });
});
