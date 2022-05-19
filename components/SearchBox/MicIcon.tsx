import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';

export const MicIcon = ({micListening = true}: {micListening: boolean}) => {
    return (
      micListening ? <FontAwesomeIcon icon={faMicrophone} width={10} className="text-green-700" />
      :  <FontAwesomeIcon icon={faMicrophoneSlash} width={14} className="text-red-500" />);
}

export default MicIcon;