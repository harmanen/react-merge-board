/**
 * Render tests for the IconWrapper component.
 * @module
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import IconWrapper from '@/app/components/IconWrapper';

describe('IconWrapper', () => {
  it('renders bubble variant', () => {
    render(<IconWrapper variant="bubble">Test</IconWrapper>);
    expect(screen.getByTestId('icon-bubble')).toBeInTheDocument();
  });

  it('renders hidden variant', () => {
    render(<IconWrapper variant="hidden">Test</IconWrapper>);
    expect(screen.getByTestId('icon-hidden')).toBeInTheDocument();
  });
});
