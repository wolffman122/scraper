/**
 * @jest-environment node
 */
import { GET } from "../api/github/route"

test('it should return a message', async () => {
  const res = await GET();
  const data = await res.json()

  expect(data.version).toBe("v14.0.4");
})