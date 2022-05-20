import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '@/components/global/Footer'
import styles from '@/styles/Speechify.module.css'
import SearchBox from '@/components/SearchBox'
import { SharedStateProvider, useSharedState } from '@/components/global/store';
import SearchResults from '@/components/SearchResults/SearchResults'
import { useEffect } from 'react'

const Speechify: NextPage = () => {
  const [state, setState] = useSharedState();
  let accu : {[key:string]: string} = {}; // For "strong" typing
    const getSpotifyAuthData = ({hash}: {hash: string}) : Record<string, string> => {
        const stringAfterHashtag = hash.substring(1);
        const URLParams = stringAfterHashtag.split("&");
        const paramsSplitUp = URLParams.reduce((acc, val) => {
            const [key, value] = val.split('=');
            acc[key] = value;
            return acc
        }, accu);
        return paramsSplitUp;
    }

    useEffect(() => {
        if (window.location.hash) {
            const {
                access_token,
                expires_in,
                token_type
            } = getSpotifyAuthData({hash: window.location.hash})
            
            setState({
                ...state,
                spotifyCredentials: {
                    ...state.spotifyCredentials,
                    accessToken: access_token,
                    tokenType: token_type,
                    expiresIn: expires_in,
                }
            });
            console.log(state);
        }
    })

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

        <div className={styles.results}>
          <SearchResults />
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
