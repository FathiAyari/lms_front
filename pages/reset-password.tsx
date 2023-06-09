import React, { useState } from 'react'
import logo from '../public/lms.png'
import Image from 'next/image'
// import AppHead from '@/components/apphead'
import axios from 'axios'
import { Button } from '@chakra-ui/react'
import { customAlphabet } from 'nanoid'
import { useRouter } from 'next/router'

const nanoid = customAlphabet('123456789', 4)

function ResetPassord() {
    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const [stepNumber, setStepNumber] = useState(1)
    const [code, setCode] = useState(nanoid())
    const [writedCode, setWritedCode] = useState('')
    const [userId, setUserId] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const sendEmail = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await axios.get(
                process.env.NEXT_PUBLIC_BACK_URL +
                    `/api/reset-password/${email}/${code}`
            )
            setUserId(response.data.user_id)
            setStepNumber(2)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    const verifyCode = async (e) => {
        e.preventDefault()
        if (code === writedCode) {
            setStepNumber(3)
        }
    }

    const changePassword = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await axios.put(
                process.env.NEXT_PUBLIC_BACK_URL + `/api/update_password`,
                { password, user_id: userId }
            )
            router.push('/')
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    return (
        <>
            <section className="bg-white">
                <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            {/* <div className="bg-red flex items-center justify-center">
                                <Image
                                    src={logo}
                                    alt="Image Description"
                                    width={100}
                                    height={100}
                                />
                            </div> */}
                            {stepNumber === 1 ? (
                                <>
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                        Réinitialiser votre mot de passe
                                    </h1>
                                    <form
                                        className="space-y-4 md:space-y-6"
                                        onSubmit={sendEmail}
                                    >
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block mb-2 text-sm font-medium text-gray-900"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={email}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                                placeholder="user@example.com"
                                                required
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                            />
                                        </div>

                                        <Button
                                            fontFamily={'heading'}
                                            type="submit"
                                            mt={8}
                                            w={'full'}
                                            bgGradient="linear(to-r, red.400,pink.400)"
                                            color={'white'}
                                            _hover={{
                                                bgGradient:
                                                    'linear(to-r, red.400,pink.400)',
                                                boxShadow: 'xl',
                                            }}
                                            isLoading={loading}
                                        >
                                            Réinitialiser
                                        </Button>
                                    </form>
                                </>
                            ) : stepNumber === 2 ? (
                                <>
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                        Saisire le code de vérification
                                    </h1>
                                    <form
                                        className="space-y-4 md:space-y-6"
                                        onSubmit={verifyCode}
                                    >
                                        <div>
                                            <label
                                                htmlFor="code"
                                                className="block mb-2 text-sm font-medium text-gray-900"
                                            >
                                                Code
                                            </label>
                                            <input
                                                name="code"
                                                id="code"
                                                value={writedCode}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                                placeholder="code"
                                                required
                                                onChange={(e) =>
                                                    setWritedCode(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                        <Button
                                            fontFamily={'heading'}
                                            type="submit"
                                            mt={8}
                                            w={'full'}
                                            bgGradient="linear(to-r, red.400,pink.400)"
                                            color={'white'}
                                            _hover={{
                                                bgGradient:
                                                    'linear(to-r, red.400,pink.400)',
                                                boxShadow: 'xl',
                                            }}
                                        >
                                            Envoyer
                                        </Button>
                                    </form>
                                </>
                            ) : (
                                <>
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                        Changer vote mot de passe
                                    </h1>
                                    <form
                                        className="space-y-4 md:space-y-6"
                                        onSubmit={changePassword}
                                    >
                                        <div>
                                            <label
                                                htmlFor="password"
                                                className="block mb-2 text-sm font-medium text-gray-900"
                                            >
                                                Mot de passe
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                value={password}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                                required
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                            />
                                        </div>

                                        <Button
                                            fontFamily={'heading'}
                                            type="submit"
                                            mt={8}
                                            w={'full'}
                                            bgGradient="linear(to-r, red.400,pink.400)"
                                            color={'white'}
                                            _hover={{
                                                bgGradient:
                                                    'linear(to-r, red.400,pink.400)',
                                                boxShadow: 'xl',
                                            }}
                                            isLoading={loading}
                                        >
                                            Réinitialiser
                                        </Button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResetPassord
