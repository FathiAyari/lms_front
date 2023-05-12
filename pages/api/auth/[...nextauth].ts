import NextAuth, { NextAuthOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import CredentialsProvider from 'next-auth/providers/credentials'

const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            type: 'credentials',
            credentials: {
                username: { label: 'email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                try {
                    // Fetch data from API and validate credentials
                    const response = await fetch(
                        'http://127.0.0.1:8000/api/login/',
                        {
                            method: 'POST',
                            body: JSON.stringify(credentials),
                            headers: { 'Content-Type': 'application/json' },
                        }
                    )

                    const data = await response.json()

                    if (response.ok) {
                        console.error('done')
                        console.log(data)
                        return data
                    } else {
                        console.log(response)
                        return data
                    }
                } catch (error) {
                    // Handle any error that occurred during API request
                    console.error('error')
                    return Promise.resolve(null)
                }
            },
        }),
    ],
}

export default NextAuth(options)
