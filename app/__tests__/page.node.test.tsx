/**
 * @jest-environment node
 */
import { GET } from "../api/github/route"

test('it should return a message', async () => {
  const res = await GET();
  console.log('Body', res.body);

  const data = await res.json()

  expect(data.msg).toBe("Hello");
})