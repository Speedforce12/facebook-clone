import Head from 'next/head'
import { Inter } from '@next/font/google'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import Widgets from '@/components/Widgets'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Facebook home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-1 mt-3' >
        <Sidebar />
        <Feed />
        <Widgets/>
      </main>
    </>
  )
}
