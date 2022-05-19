import { ReactNode } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


export const ClientOnly = (children: ReactNode) => {
  // With this code, it should be possible to wrap components info <ClientOnly> (like you can do in Nuxt 3),
  // but it does not work somehow. This was needed to check if the browser allows Speech Recognition,
  // i.e. SpeechRecognition.browserSupportsSpeechRecognition, but Next.js' SSR didn't like that.
  return (
      typeof window === 'undefined' ? null : children
  )
}

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const startListening = async (): Promise<void> => {
    SpeechRecognition.startListening({ continuous: true, language: 'nl-NL' });
  };

  return (
    <div className="p-6">
              <p>Microphone: {listening ? 'on' : 'off'}</p>
              <div className="flex gap-2 mb-2">
              <button onClick={startListening}>Start</button>
              <button onClick={SpeechRecognition.stopListening}>Stop</button>
              <button onClick={resetTranscript}>Reset</button>
              </div>
              <p className="bg-white p-5">{transcript}</p>
      </div>
  );

};

export default Dictaphone;
