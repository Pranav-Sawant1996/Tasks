import React, { useState } from 'react'
import signin from "../images/signin.png"
import "../style/signin.css"
import { Controller, useForm } from 'react-hook-form'
import { validatePassword, validateUsername } from '../validation'
import { useAuth } from '../context/authContext'

export default function SignIn() {
    const { isLoggedIn, login } = useAuth()
    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm()

    // const username = register('username', { validateUsername });
    // const password = register('password', { validatePassword });

    const submit = async (data) => {
         fetch("/sign_in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    console.log("Sign-in successful!",result);
                    login()
                } else {
                    console.log("Sign-in failed!");
                }
            })
            .catch((error) => console.error("Error:", error));
    }

    return (
        <div className="body">
            <div className="container-left">
                <h1>
                    Welcome to Todo application
                </h1>
                <form onSubmit={handleSubmit(submit)} >
                    <div className="card">
                        <div className="header">
                            <h3>Sign In</h3>
                        </div>
                        <div className="text-box">
                            <p>Username</p>
                            <Controller
                                control={control}
                                name="username"
                                rules={{
                                    required: { value: true, message: "This is required" },

                                }}
                                render={({ field: { onChange, value } }) => (
                                    <input
                                        placeholder="Username"
                                        onChange={onChange}
                                        value={value}
                                    />
                                )}
                            />
                            {errors.username && <p className='error'>{errors.username.message}</p>}
                        </div>
                        <div className="text-box">
                            <p>Password</p>
                            <Controller
                                control={control}
                                name="password"
                                rules={{
                                    required: { value: true, message: "This is required" },

                                }}
                                render={({ field: { onChange, value } }) => (
                                    <input
                                        placeholder="Enter password"
                                        onChange={onChange}
                                        value={value}
                                        type='password'
                                    />
                                )}
                            />
                            {errors.password && <p className='error'>{errors.password.message}</p>}
                        </div>
                        <div className="submit">
                            <button>
                                Sign In
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="container-right">
                <img src={signin} />
            </div>
        </div>
    )
}
