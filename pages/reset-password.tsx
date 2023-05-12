import React, { useState } from 'react'
import logo from '../public/lms.png'
import Image from 'next/image'
import AppHead from '@/components/apphead'
import router from 'next/router'

function ResetPassord() {
    const [showAlert, setShowAlert] = useState(false)

    const toggleAlert = () => {
        router.push('/change-password')
    }
    return (
        <>
            <AppHead></AppHead>

            {showAlert && (
                <div className="absolute top-5 left-5 right-5 z-10 bg-green-500 text-white p-4 rounded-md">
                    <p>This is an alert!</p>
                    <button onClick={toggleAlert}>Fermer</button>
                </div>
            )}

            <section className="bg-white">
                <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
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
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Réinitialiser votre mot de passe
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>

                                <button
                                    type="button"
                                    onClick={toggleAlert}
                                    className="bg-red w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Réinitialiser
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResetPassord
