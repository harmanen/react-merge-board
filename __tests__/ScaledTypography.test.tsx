/**
 * Render tests for the ScaledTypography component.
 * @module
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ScaledTypography from '@/app/components/ScaledTypography';

describe('ScaledTypography', () => {
  it('renders text', () => {
    render(<ScaledTypography>Test</ScaledTypography>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
