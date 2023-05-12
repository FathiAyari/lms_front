import Head from 'next/head'
import React from 'react'

function AppHead() {
    return (
        <Head>
            <title>{process.env.APP_NAME}</title>
        </Head>
    )
}

export default AppHead
