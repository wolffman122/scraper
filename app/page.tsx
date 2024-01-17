'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { Box, Flex, Heading, Text, Separator } from '@radix-ui/themes'
import useSWR from 'swr'

async function fetcher(...arg) {
  const res = await fetch(...arg);
  console.log('fetcherr');
  return res.json();
}

export default function Home() {
  const { data } = useSWR('/api/github', fetcher);
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Box className='mt-5'>
        <Heading className='text-center'>
          Wolfftechs Webiste
        </Heading>
        <Flex justify={'center'}>
          <div className="shadow-md hover:shadow-xl rounded-lg">
            <div className="bg-blue-400 rounded-tl-lg rounded-tr-lg text-center" data-testid="nextjs-label">
              Next.JS Info
            </div>
            <div className="p-1">
              <h4 className='inline-block' data-testid="nextjs-verion-label">Version:</h4><p className='inline'> {data ? data.version : 'Loading...'}</p>
            </div>
            <div className="bg-blue-200">
              
            </div>
            <ul className='list-inside list-disc'>
              {
                data ? data.pullRequests.map((pr) => (
                  <li>{pr.title}</li>
                ))  : <li>Loading</li>
              }
            </ul>
          </div>
        </Flex>

      </Box>

    </main>
  )
}
