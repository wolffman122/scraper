import { render, screen } from '@testing-library/react';
import Home from "../app/page";

describe('Home', () => {
    test('renders a heading', () => {
        render(<Home />);

        const heading = screen.getByRole('img', {
            name: /Next.js Logo/i,
        });

        expect(heading).toBeInTheDocument();
    })
})