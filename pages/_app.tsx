import 'regenerator-runtime/runtime'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SharedStateProvider } from "@/components/global/store"


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <SharedStateProvider> 
    <Component {...pageProps} />
  </SharedStateProvider>
  )
}

export default MyApp
