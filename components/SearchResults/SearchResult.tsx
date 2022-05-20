import styles from '@/styles/SearchResults/SearchResult.module.css';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface SearchResultProps {
    artist: string,
    song: string,
    url: string,
}

export const SearchResult = (props: SearchResultProps) => {
    return (
        <div className="bg-white flex w-full mb-4 rounded-r-2xl border border-teal-400 drop-shadow-sm">
            <div className="image">
                <img src="https://via.placeholder.com/150" alt="" className="cover" />
            </div>
            <div className="meta flex flex-col p-4 flex-grow">
                <span className="title text-2xl mb-2">{props.artist}</span>
                <span className="song">{props.song}</span>
            </div>
            {/* <a href={props.url} className="play first-letter:flex justify-center items-center content-center mr-8">
                <FontAwesomeIcon icon={faPlay} height={20} fill="#333"  />
            </a> */}
        </div>
    );
};

