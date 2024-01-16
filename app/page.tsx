import Image from 'next/image'
import styles from './page.module.css'
import { Box, Flex, Heading, Text } from '@radix-ui/themes'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Box className='mt-5'>
        <Heading className='text-center'>
          Wolfftech's Webiste
        </Heading>
        <Flex justify={'center'}>
        <Box className='w-80 border-2 rounded-lg'>
          <Box>
            <Text 
              className='font-bold'
              data-testid="nextjs-label">
              Next.js current version
            </Text>
          </Box>
          <Flex gap={'3'} align={'center'}>
            <Box>
              <Text 
                className='font-medium'
                data-testid="nextjs-version">
                4
              </Text>
            </Box>
          </Flex>
        </Box>
        </Flex>
      </Box>
    </main>
  )
}
