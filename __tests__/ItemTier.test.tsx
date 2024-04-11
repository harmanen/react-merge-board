import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ItemTier } from '@/app/components/ItemTier';

describe('ItemTier', () => {
  it('renders correct level number', () => {
    render(<ItemTier itemLevel={10} />);
    expect(screen.getByText('10')).toBeInTheDocument();
  });
});
