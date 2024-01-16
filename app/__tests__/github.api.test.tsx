/**
 * @jest-environment node
 */
import { GET, POST } from "../api/github/route"

test('it should return a version', async () => {
  const res = await GET();
  const data = await res.json()

  expect(data.version).toBe("v14.0.4");
  expect(data.pullRequests.length).toBe(5);
})