import '@/styles/globals.css'
import { CustomAppProps } from '@/types/api'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider, signIn, useSession } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

interface Props {
    children: React.ReactNode
}

const App: FC<CustomAppProps> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    /*  const router = useRouter()
    useEffect(() => {
        if (session?.user.role !== 1) router.push('/test')
    }, []) */
    return (
        <SessionProvider session={session}>
            {' '}
            <ChakraProvider>
                <Component {...pageProps} />{' '}
            </ChakraProvider>
        </SessionProvider>
    )
}

export default App
