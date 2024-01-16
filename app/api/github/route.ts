import { Octokit } from "octokit";

export async function GET() {
  const octokit = new Octokit();

  const response = await octokit.request("/repos/vercel/next.js/releases/latest")


  return Response.json({ version: response.data.tag_name });
}