import React from 'react'
import "../style/home.css"
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    const handleLoginClick = () => {
        navigate("/signin");
    }
    const handleSignUpClick = () => {
        navigate("/signup");
    }
    return (
        <section className="thumbnail">
            <div className='button'>
                <button className="homeButton" onClick={handleLoginClick}>Login</button>
                <button className="homeButton" onClick={handleSignUpClick}>Sign Up</button>
            </div>
            <div className="container">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eacd4ec80134b757ccdcc59918692fb7b4c0337350a7adac0daa6437404e185f?placeholderIfAbsent=true&apiKey=3e9ce65a9ab94df0a79d76628e51f49a"
                    className="backgroundImage"
                    alt=""
                />
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/87f40c596c000acbfb76c7fe6724af8a6a0a75a3a3423aff059925c83234e191?placeholderIfAbsent=true&apiKey=3e9ce65a9ab94df0a79d76628e51f49a"
                    className="contentImage"
                    alt="Thumbnail content"
                />
            </div>
        </section>

    )
}
