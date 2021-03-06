import { useCallback } from "react";
import _ from "lodash";
import { Combobox } from "@headlessui/react";
import { useSharedState } from "@/components/global/store";
import styles from "@/styles/SearchBox/SearchField.module.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MicIcon from "@/components/SearchBox/MicIcon";

const SpeechInput = () => {
  const [state, setState] = useSharedState();

  const setMessage = (message: string) => {
    setState({
      ...state,
      feedbackMessage: message,
    });
    resetTranscript();
  };

  const performGeneralSearch = (searchTerm: string) => {
    setState({
      feedbackMessage: `Hold on, looking for ${searchTerm}.`,
      currentSearchQuery: searchTerm,
    });
    resetTranscript();
  };

  const playSong = ({artist, song, } : Record<string, string>) => {
    setState({
      currentSearchQuery: `${artist} - ${song}`,
      feedbackMessage: `Looking for the song ${song} by ${artist}`
    });
    resetTranscript();
  };

  const clear = () => {
    resetTranscript(),
    setState({
      ...state,
      currentSearchQuery: '',
      feedbackMessage: 'I can see clearly now the rain has gone.'
    });
    resetTranscript();
  };

  const commands = [
    {
      command: "Search for *",
      callback: (searchTerm: string) =>
      performGeneralSearch(searchTerm),
    },
    {
      command: "Play :song by :artist",
      callback: ({ song, artist }: Record<string, string>) =>
        playSong({artist, song}),
    },
    {
      command: ["Hey Spotify", "Hi Spotify"],
      callback: ({ command }: { command: string }) =>
        setMessage("Hi there! Let's gooooo..."),
      matchInterim: true,
    },
    {
      command: "clear",
      callback: () => clear(),
      matchInterim: true,
    },
  ];

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  const handleListenButtonClick = async (): Promise<void> => {
    if (listening) {
      SpeechRecognition.stopListening();
      resetTranscript();
    } else {
      SpeechRecognition.startListening({ continuous: true, language: "en-US" });
    }
  };

  return (
    <Combobox.Button as="button" onClick={handleListenButtonClick}>
      <MicIcon micListening={listening} />
    </Combobox.Button>
  );
};

export interface SearchFieldProps {
  // The props that are passed to this component
  searchInputPlaceholderText: string;
}

const SearchField = ({ props }: { props: SearchFieldProps }): JSX.Element => {
  const [state, setState] = useSharedState();

  const setQueryValue = (value: string) => {
    if (process.env.NODE_ENV === "development") {
      console.log(`Looking for ${value}`);
    }

    setState({
      ...state,
      currentSearchQuery: value,
    });
  };

  const handleChange = useCallback(_.debounce(setQueryValue, 1000), []);

  return (
    <div className={styles.container}>
      <Combobox value={state.currentSearchQuery} onChange={handleChange}>
        <div className="flex mb-4">
          <Combobox.Input
            placeholder={props.searchInputPlaceholderText}
            onChange={(event) => handleChange(event.target.value)}
          />
          <SpeechInput />
        </div>
      </Combobox>
      <p className="text-xs text-center font-bold">{state.feedbackMessage}</p>
    </div>
  );
};

export default SearchField;
