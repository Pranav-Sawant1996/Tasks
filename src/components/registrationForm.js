import React from 'react'
import styles from "../style/registrationForm.module.css"
import { Controller, useForm } from 'react-hook-form'
import { useAuth } from '../context/authContext'
import { InputAdornment, TextField } from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom'

export default function RegistrationForm() {
  const { isLoggedIn, login } = useAuth()
  const navigate = useNavigate()
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
          // login()
          navigate("/signin")
        } else {
          console.log("Sign-up failed!");
        }
      })
      .catch((error) => console.error("Error:", error));
  }
  const handleSignIn = () => {
    navigate("/signin")
  }
  return (
    <main className={styles.registerContainer}>
      <div className={styles.formWrapper}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3d9d6152f48827102cd709d1eac90f744ddc4ac7dd22658d7007df364690637?placeholderIfAbsent=true&apiKey=3e9ce65a9ab94df0a79d76628e51f49a" alt="" className={styles.backgroundImage} />
        <section className={styles.formContainer}>
          <div className={styles.contentWrapper}>
            <div className={styles.imageColumn}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a4b05a1a9cec36e253d4b4626ea04963c91e463574a5c865b4b6d8600a3c242?placeholderIfAbsent=true&apiKey=3e9ce65a9ab94df0a79d76628e51f49a" alt="Registration illustration" className={styles.sideImage} />
            </div>
            <div className={styles.formColumn}>
              <form className={styles.formContent} onSubmit={handleSubmit(submit)}>
                <h1 className={styles.formTitle}>Sign Up</h1>
                <div className={styles.input_box}>
                  <Controller
                    control={control}
                    name="firstname"
                    rules={{
                      required: { value: true, message: "This is required" },
                    }}
                    render={({ field: { onChange, value } }) => (
                      <TextField id="outlined-basic" size='small' variant="outlined" placeholder="Enter Firstname"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonOutlineIcon />
                            </InputAdornment>
                          ),
                        }}
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.firstname && <p className={styles.error}>{errors.firstname.message}</p>}
                </div>
                <div className={styles.input_box}>
                  <Controller
                    control={control}
                    name="lastname"
                    rules={{
                      required: { value: true, message: "This is required" },
                    }}
                    render={({ field: { onChange, value } }) => (
                      <TextField id="outlined-basic" size='small' variant="outlined" placeholder="Enter Lastname"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonOutlineIcon />
                            </InputAdornment>
                          ),
                        }}
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.lastname && <p className={styles.error}>{errors.lastname.message}</p>}
                </div>
                <div className={styles.input_box}>
                  <Controller
                    control={control}
                    name="email"
                    rules={{
                      required: { value: true, message: "This is required" },
                      pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Enter valid email id" }
                    }}
                    render={({ field: { onChange, value } }) => (
                      <TextField id="outlined-basic" size='small' variant="outlined" placeholder="Enter Email Id"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon />
                            </InputAdornment>
                          ),
                        }}
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                </div>
                <div className={styles.input_box}>
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
                  {errors.username && <p className={styles.error}>{errors.username.message}</p>}
                </div>
                <div className={styles.input_box}>
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
                  {errors.password && <p className={styles.error}>{errors.password.message}</p>}
                </div>
                <div className={styles.termsWrapper}>
                  <Controller
                    control={control}
                    name="terms"
                    rules={{
                      required: "Please accept terms and conditions",
                    }}
                    render={({ field: { onChange, value } }) => (
                      <input type="checkbox" id="terms" className={styles.checkbox}
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  <label htmlFor="terms" className={styles.termsText}>
                    I agree to all terms and conditions
                  </label>
                </div>
                {errors.terms && <p className={styles.error}>{errors.terms.message}</p>}
                <button type="submit" className={styles.registerButton}>Register</button>
                <p className={styles.signInLink}>
                  Already have an account? <span className={styles.signInHighlight} onClick={handleSignIn} >Sign In</span>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
