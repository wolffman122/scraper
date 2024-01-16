import { render, screen } from "@testing-library/react"
import Home from "../page"

describe('Home Render', () => {
  test('Render Wolff tech header', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Wolfftechs Webiste/i,
    });

    expect(heading).toBeInTheDocument();
  })

  test('Render next js version text', () => {
    render(<Home />);

    const label = screen.getByTestId('nextjs-label');
    const version = screen.getByTestId('nextjs-version');

    expect(label).toBeInTheDocument();
    expect(version).toBeInTheDocument();
  })
})