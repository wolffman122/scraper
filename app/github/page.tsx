import { GetRepoInfo } from "./action"

export default async function RepoInfo(props) {
  const repoInfo = await GetRepoInfo(props.authorsName, props.repoName);

  return (
    <div className="shadow-md hover:shadow-xl rounded-lg">
      <div className="bg-blue-400 rounded-tl-lg rounded-tr-lg text-center" data-testid="nextjs-label">
        {props.repoName} Info
      </div>
      <div className="p-1">
        <h4 className='inline-block' data-testid="nextjs-verion-label">Version:</h4><p className='inline'> {repoInfo ? repoInfo.version : 'Loading...'}</p>
      </div>
      <div className="bg-blue-200">
        
      </div>
      <ul className='list-inside list-disc'>
        {
          repoInfo ? repoInfo.pullRequests?.map((pr) => (
            <li id={pr.url} key={pr.url}>{pr.title}</li>
          ))  : <li>Loading</li>
        }
      </ul>
    </div>
  )
}