import { NextApiRequest } from 'next'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            type: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            //@ts-ignore
            async authorize(credentials, req) {
                try {
                    // Fetch data from API and validate credentials
                    const response = await fetch(
                        'http://192.168.137.200:8000/api/login',
                        {
                            method: 'POST',
                            body: JSON.stringify(credentials),
                            headers: { 'Content-Type': 'application/json' },
                        }
                    )

                    const user = await response.json()

                    if (user.full_name !== undefined) {
                        return {
                            id: user.id,
                            name: user.full_name,
                            email: user.email,
                            role: user.role,
                        }
                    } else if (user.message == 'User does not exist') {
                        throw new Error("L'utilisateur n'existe pas") // Throw an error
                    } else {
                        throw new Error('Mot de passe incorrecte') // Throw an error
                    }
                } catch (error) {
                    console.log(error)
                    throw Error(error)
                }
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }: any) {
            delete token.email
            if (user) token.user = user
            return token
        },
        async session({ session, token }: any) {
            session.user = token?.user
            return session
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        // A secret to use for key generation. Defaults to the top-level secret.
        maxAge: 60 * 60 * 24 * 30,
    },
    debug: true,
}

export default NextAuth(options)

// //Authorize function for sign in with credentials
// const authorize = async (
//   credentials: Record<'email' | 'password' | 'role' | 'key', string>,
//   req: NextApiRequest
// ) => {
//   await dbConnect()
//   const { email, password, role, key } = credentials
//   if (role === 'admin') {
//     if (
//       email !== process.env.AUTH_ADMIN_LOGIN ||
//       password !== process.env.AUTH_ADMIN_PASSWORD ||
//       key !== process.env.KEY
//     )
//       throw new createHttpError.BadRequest('Incorrect email or password')

//     return {
//       id: 'admin',
//       name: 'admin',
//       email: process.env.AUTH_ADMIN_LOGIN,
//       role: 'admin',
//     }
//   } else {
//     // Verify user
//     const user = await UserModel.findOne({
//       email: email.toLowerCase(),
//     }).select('+password')

//     return {
//       id: user._id,
//       name: user.firstName + ' ' + user.lastName,
//       email: user.email,
//       role: 'user',
//     }
//   }
// }
