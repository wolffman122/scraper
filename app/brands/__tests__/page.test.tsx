import { render, screen } from '@testing-library/react';
import Brands from '../page';
import { describe } from 'node:test';

describe('Brands', () => {

  test('renders create brand button', () => {
    render(<Brands />);
    const createBrandButton = screen.getByText('Create Brand');
    expect(createBrandButton).toBeInTheDocument();
  });
});
