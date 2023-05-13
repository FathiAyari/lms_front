import { NextPage } from 'next'
import { AppProps } from 'next/app'

export type CustomNextPage<P = {}> = NextPage<P> & {
    auth?: boolean
    isAdmin?: boolean
}

export type CustomAppProps = AppProps & {
    Component: CustomNextPage
}
