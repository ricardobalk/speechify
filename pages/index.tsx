import { useSharedState } from "@/components/global/store"
import { useEffect } from 'react';

const Home = () => {
    const [state, setState] = useSharedState();

    const handleLoginRequest = () => {
        const CLIENT_ID = state.spotifyCredentials.clientId;
        const SPOTIFY_AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize';
        const REDIRECT_URL_AFTER_LOGIN = 'http://localhost:3000/speechify';
        const SCOPES = ['user-modify-playback-state',
        'user-follow-modify', 'user-read-recently-played',
        'user-read-playback-position', 'playlist-read-collaborative',
    'user-read-playback-state', 'streaming', 'user-top-read', 'user-read-private'];
        const SCOPES_URL_PARAM = SCOPES.join("%20");
        const LOGIN_URL = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`
        window.location.href = LOGIN_URL;
    }
    
    return (
        <div className="text-center p-8">
            <h1 className='mb-4 text-xl'>First things first&hellip;</h1>
            <button onClick={handleLoginRequest} className="border border-teal-700 rounded-md p-2 hover:text-white hover:bg-teal-800 transition-colors">Let's login</button>
        </div>
    )
}

export default Home;