import { Box, Flex, Heading } from '@radix-ui/themes'
import RepoInfo from './github/page';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Box className='mt-5'>
        <Heading className='text-center'>
          Wolfftechs Website
        </Heading>
        <div className='flex space-x-3'>
          <RepoInfo authorsName="vercel" repoName="Next.JS" />
          <RepoInfo authorsName="nodejs" repoName="Node" />
          <RepoInfo authorsName="prisma" repoName="prisma" />
        </div>
      </Box>

      

    </main>
  )
}
