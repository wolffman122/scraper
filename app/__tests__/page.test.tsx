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

  test('REnder Next.JS Version', () => {
    render(<Home />);
    const label = screen.getByTestId('nextjs-label');
    const versionLabel = screen.getByTestId('nextjs-verion-label');

    expect(label).toBeInTheDocument();
    expect(versionLabel).toBeInTheDocument();
  })

  test('Render Next.JS Pull Requests', () => {
    render(<Home />);
    const label = screen.getByTestId('nextjs-pull-request-label');

    expect(label).toBeInTheDocument();
  })
})