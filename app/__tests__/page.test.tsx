import { render, screen } from "@testing-library/react"
import { createMocks } from 'node-mocks-http'
import RepoInfo from "../github/page"
import { beforeEach } from "node:test";

describe('Home Render', () => {
  // test('Render Wolff tech header', async () => {
  //   render(await <Home />);

  //   const heading = screen.getByRole('heading', {
  //     name: /Wolfftechs Website/i,
  //   });

  //   expect(heading).toBeInTheDocument();
  // })

  // global.fetch = jest.fn(() => 
  //   Promise.resolve({
  //     json: () => Promise.resolve({ rates: "Test" }),
  //   })
  // );

  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Render next js version text', async () => {
    const expectedVersion = "v14.0.4";
    fetch.mockResponseOnce(JSON.stringify({tag_name: expectedVersion }));
    fetch.mockResponseOnce(JSON.stringify([
        {
          title: 'Title 1',
          url: 'http://title1',
          closed_at: 'Closed 1'
        },
        {
          title: 'Title 2',
          url: 'http://title2',
          closed_at: 'Closed 2'
        },
        {
          title: 'Title 3',
          url: 'http://title3',
          closed_at: 'Closed 3'
        },
        {
          title: 'Title 4',
          url: 'http://title4',
          closed_at: 'Closed 4'
        },
        {
          title: 'Title 5',
          url: 'title5',
          closed_at: 'Closed 5'
        },
      ] 
    ));

    const authorsName = "TestAuthor";
    const repoName = "Test Repo Name";
    const jsx = await RepoInfo({authorsName, repoName});
    const result = render(jsx);

    const label = screen.getByTestId<HTMLDivElement>('nextjs-label');
    const version = screen.getByTestId('nextjs-verion-label');
    const li = result.container.querySelector<HTMLLIElement>('#title5');

    expect(label.textContent).toBe(`${repoName} Info`);
    expect(version).toBeInTheDocument();
    expect(li.textContent).toBe("Title 5");
  })


})