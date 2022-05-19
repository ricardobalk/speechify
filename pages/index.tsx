import type { NextPage } from 'next'
import { useSharedState } from "@/components/global/store"
import { useEffect } from 'react';

const Home = () => {
    const [state, setState] = useSharedState();

    const handleLoginRequest = () => {
        const CLIENT_ID = state.spotifyCredentials.clientId;
        const SPOTIFY_AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize';
        const REDIRECT_URL_AFTER_LOGIN = 'http://localhost:3000';
        const SCOPES = ['user-modify-playback-state',
        'user-follow-modify', 'user-read-recently-played',
        'user-read-playback-position', 'playlist-read-collaborative',
    'user-read-playback-state', 'streaming', 'user-top-read', 'user-read-private'];
        const SCOPES_URL_PARAM = SCOPES.join("%20");
        const LOGIN_URL = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`
        window.location.href = LOGIN_URL;
    }
    
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
        <div className="text-center p-8">
            <h1 className='mb-4 text-xl'>First things first&hellip;</h1>
            <button onClick={handleLoginRequest} className="border border-teal-700 rounded-md p-2 hover:text-white hover:bg-teal-800 transition-colors">Let's login</button>
        </div>
    )
}

export default Home;