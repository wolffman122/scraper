import { Octokit } from "octokit";

export async function GetRepoInfo(authorsName: string, repoName: string) {

  try
    {
    const releaseResponse = await fetch(`https://api.github.com/repos/${authorsName}/${repoName}/releases/latest`);
    const pullsResponse = await fetch(`https://api.github.com/repos/${authorsName}/${repoName}/pulls`);

    const release = await releaseResponse.json();
    const pulls = await pullsResponse.json();
    
    const pullRequests = pulls.slice(0, 5).map((p) => {
      return {
        title: p.title,
        url: p.url,
        closed_at: p.closed_at
      };
    });


    return { 
      version: release.tag_name,
      pullRequests: pullRequests,
    };
  }
  catch(error)
  {
    console.log('Error', error);
  }
}