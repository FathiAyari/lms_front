import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Login from './login'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>My page title</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Login />
        </>
    )
}
