import AppHead from '@/components/apphead'

import Image from 'next/image'
import logo from '../public/lms.png'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
function ChangePassword() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmedPassword, setshowConfirmedPassword] = useState(false)
    const [password, setPassword] = useState('')
    const [ConfirmedPassword, setConfirmedPassword] = useState('')
    const togglePasswordVisibility = () => setShowPassword(!showPassword)
    const toggleConfirmedPasswordVisibility = () =>
        setshowConfirmedPassword(!showConfirmedPassword)
    return (
        <>
            <AppHead></AppHead>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div className="bg-red flex items-center justify-center">
                                <Image
                                    src={logo}
                                    alt="Image Description"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                Changer le mot de passe de votre compte
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div className="py-2">
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Mot de passe
                                    </label>
                                    <div className="flex items-center relative">
                                        <input
                                            onChange={(event) => {
                                                setPassword(event.target.value)
                                            }}
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                        />

                                        <button
                                            className=" absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 p-1"
                                            type="button"
                                            disabled={
                                                password.length == 0
                                                    ? true
                                                    : false
                                            }
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? (
                                                <EyeSlashIcon className="h-5 w-5" />
                                            ) : (
                                                <EyeIcon className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>

                                    {password.length !== 0 &&
                                        password.length < 8 && (
                                            <p className="absolute  text-sm text-red-600 dark:text-red-500">
                                                <span className="font-medium">
                                                    Oops!
                                                </span>{' '}
                                                Mot passe est court
                                            </p>
                                        )}
                                </div>
                                <div className="py-2">
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Confirmer le mot de passe
                                    </label>
                                    <div className="flex items-center relative">
                                        <input
                                            onChange={(event) => {
                                                setConfirmedPassword(
                                                    event.target.value
                                                )
                                                console.log(event.target.value)
                                            }}
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            type={
                                                showConfirmedPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                        />
                                        <button
                                            className=" absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 p-1"
                                            type="button"
                                            disabled={
                                                ConfirmedPassword.length == 0
                                                    ? true
                                                    : false
                                            }
                                            onClick={
                                                toggleConfirmedPasswordVisibility
                                            }
                                        >
                                            {showConfirmedPassword ? (
                                                <EyeSlashIcon className="h-5 w-5" />
                                            ) : (
                                                <EyeIcon className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>
                                    {ConfirmedPassword !== password &&
                                        ConfirmedPassword.length !== 0 && (
                                            <p className="absolute  text-sm text-red-600 dark:text-red-500">
                                                <span className="font-medium">
                                                    Oops!
                                                </span>{' '}
                                                Mot passe n'est compatible
                                            </p>
                                        )}
                                </div>

                                <button
                                    type="button"
                                    className="bg-red w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    S'identifier
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Vous n'avez pas encore de compte?{' '}
                                    <a
                                        href="#"
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        S'inscrire
                                    </a>
                                </p>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Avez-vous oublié votre mot de passe?{' '}
                                    <a
                                        href="#"
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Réinitialiser
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChangePassword
