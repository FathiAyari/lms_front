import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from './login'
import Head from '../components/apphead'
import Title from '@/components/apphead'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Login />
        </>
    )
}
