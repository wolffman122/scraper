import { Octokit } from "octokit";

export async function GET(request: Request) {
  const octokit = new Octokit();

  const response = await octokit.request("/repos/vercel/next.js/releases/latest");
  const pulls = await octokit.request("/repos/vercel/next.js/pulls", {
    state: 'closed'
  });

  const pullRequests = pulls.data.slice(0, 5).map((p) => {
    return {
      title: p.title,
      url: p.url,
      closed_at: p.closed_at
    };
  });


  return Response.json({ version: response.data.tag_name, pullRequests: pullRequests });
}