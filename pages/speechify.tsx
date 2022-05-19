import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '@/components/global/Footer'
import styles from '@/styles/Home.module.css'
import SearchBox from '@/components/SearchBox'
import { SharedStateProvider, useSharedState } from '@/components/global/store';

const Speechify: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Speechify</title>
        <meta name="description" content="Voice-based Spotify Search Engine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hey, <span className="text-teal-500">Spotify!</span>
        </h1>


        <div className={styles.searchBox}>
          <SearchBox />
        </div>

        <p className="text-sm my-2">Ask for a song, an artist or an album. Here are some suggestions:</p>
        <ul>
          <li className='text-xs'>Hey Spotify, play some music from Bob Dylan.</li>
        </ul>

        </main>

        <Footer /> 

    </div>
  )
}

export default Speechify;
