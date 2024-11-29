import React from 'react'
import "../style/loginForm.css"
import { Controller, useForm } from 'react-hook-form'
import { InputAdornment, TextField } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const { isLoggedIn, login } = useAuth()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm()

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
                    console.log("Sign-in successful!", result);
                    login(result.userDetails)
                    navigate("/dashboard")
                } else {
                    console.log("Sign-in failed!",result);
                }
            })
            .catch((error) => console.error("Error:", error));
    }
    const handleSignUp = () => {
        navigate("/signup")
    }
    return (
        <main className="loginContainer">
            <div className="loginWrapper">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3d9d6152f48827102cd709d1eac90f744ddc4ac7dd22658d7007df364690637?placeholderIfAbsent=true&apiKey=3e9ce65a9ab94df0a79d76628e51f49a"
                    className="backgroundImage"
                    alt=""
                />
                <section className="loginCard">
                    <div className="cardContent">
                        <div className="formColumn">
                            <form className="formWrapper" onSubmit={handleSubmit(submit)}>
                                <h1 className="formTitle">Sign In</h1>
                                <div className='input_box'>
                                    <Controller
                                        control={control}
                                        name="username"
                                        rules={{
                                            required: { value: true, message: "This is required" },
                                        }}
                                        render={({ field: { onChange, value } }) => (
                                            <TextField id="outlined-basic" size='small' variant="outlined" placeholder="Enter Username"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <PersonIcon />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                onChange={onChange}
                                                value={value}
                                            />
                                        )}
                                    />
                                    {errors.username && <p className="error">{errors.username.message}</p>}
                                </div>
                                <div className='input_box'>
                                    <Controller
                                        control={control}
                                        name="password"
                                        rules={{
                                            required: { value: true, message: "This is required" },
                                        }}
                                        render={({ field: { onChange, value } }) => (
                                            <TextField id="outlined-basic" size='small' variant="outlined" placeholder="Enter Password" type='password'
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <LockIcon />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                onChange={onChange}
                                                value={value}
                                            />
                                        )}
                                    />
                                    {errors.password && <p className="error">{errors.password.message}</p>}
                                </div>
                                <button type="submit" className="loginButton">Login</button>
                                <p className="signupPrompt">
                                    Don't have an account?{" "}
                                    <a className="signupLink" onClick={handleSignUp}>Create One</a>
                                </p>
                            </form>
                        </div>
                        <div className="imageColumn">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/610c92260631d0b09c701ac09b78f95e8fa628b62e6ca4cb8d77b86fe61e6676?placeholderIfAbsent=true&apiKey=3e9ce65a9ab94df0a79d76628e51f49a"
                                className="loginImage"
                                alt="Login illustration"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
