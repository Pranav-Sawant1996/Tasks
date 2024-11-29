import React, { useContext } from 'react'
import signin from "../images/signin.png"
import "../style/signin.css"
import { useAuth } from '../context/authContext'
import { Controller, useForm } from 'react-hook-form'

export default function Signup() {
    const { isLoggedIn, login } = useAuth()
    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm()

    const submit = (data) => {
        fetch("/sign_up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    console.log("Sign-up successful!", result);
                    login()
                } else {
                    console.log("Sign-up failed!");
                }
            })
            .catch((error) => console.error("Error:", error));
    }

    return (
        <div className='body'>
            <div className="container-left">
                <h1>
                    Welcome to Todo application
                </h1>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="card">
                        <div className="header">
                            <h3>Sign Up</h3>
                        </div>
                        <div className="text-box">
                            <p>Firstname</p>
                            <Controller
                                control={control}
                                name="firstname"
                                rules={{
                                    required: { value: true, message: "This is required" },
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <input
                                        placeholder="Enter Firstname"
                                        onChange={onChange}
                                        value={value}
                                    />
                                )}
                            />
                            {errors.firstname && <p className="error">{errors.firstname.message}</p>}
                        </div>
                        <div className="text-box">
                            <p>Lastname</p>
                            <Controller
                                control={control}
                                name="lastname"
                                rules={{
                                    required: { value: true, message: "This is required" },
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <input
                                        placeholder="Enter Lastname"
                                        onChange={onChange}
                                        value={value}
                                    />
                                )}
                            />
                            {errors.lastname && <p className="error">{errors.lastname.message}</p>}
                        </div>
                        <div className="text-box">
                            <p>Email Id</p>
                            <Controller
                                control={control}
                                name="email"
                                rules={{
                                    required: { value: true, message: "This is required" },
                                    pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Enter valid email id" }
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <input
                                        placeholder="Enter email id"
                                        onChange={onChange}
                                        value={value}
                                    />
                                )}
                            />
                            {errors.email && <p className="error">{errors.email.message}</p>}
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
                                        placeholder="Enter username"
                                        onChange={onChange}
                                        value={value}
                                    />
                                )}
                            />
                            {errors.username && <p className="error">{errors.username.message}</p>}
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
                                        type="password"
                                    />
                                )}
                            />
                            {errors.password && <p className="error">{errors.password.message}</p>}
                        </div>
                        <div className="submit">
                            <button type="submit">
                                Sign Up
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
