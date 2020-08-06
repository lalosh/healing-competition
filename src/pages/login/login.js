import React, { useState } from 'react';
import { Header, Footer, MainContainer } from '../../components';
import styles from './login.module.css';
import { Link } from 'react-router-dom';


function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <Header />

            <MainContainer>

                <p className={styles.pleaseLoginText}>Please enter your warrior identity to login</p>

                <form className={styles.form}>
                    <div className={styles.inputContainer}>
                       
                        <input
                            autoComplete="false"
                            placeholder="Warrior Name"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />

                        <svg
                            className={styles.svg1}
                            version="1.1"
                            baseProfile="full"
                            width="300"
                            height="50"
                            xmlns="http://www.w3.org/2000/svg">

                            <polyline points="25, 50 5, 25 25, 5 300, 10" stroke="#095f80" fill="none" strokeWidth="5" />
                        </svg>

                        <svg
                            className={styles.svg2}
                            version="1.1"
                            baseProfile="full"
                            width="300"
                            height="80"
                            xmlns="http://www.w3.org/2000/svg">

                            <polyline points="10, 60 260, 65 300, 5 240, 0" stroke="#ffe800" fill="none" strokeWidth="5" />
                        </svg>
                    </div>


                    <div className={styles.inputContainer}>
                       
                        <input
                            autoComplete="false"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                        <svg
                            className={styles.svg1}
                            version="1.1"
                            baseProfile="full"
                            width="300"
                            height="50"
                            xmlns="http://www.w3.org/2000/svg">

                            <polyline points="25, 50 5, 25 25, 5 300, 10" stroke="#095f80" fill="none" strokeWidth="5" />
                        </svg>

                        <svg
                            className={styles.svg2}
                            version="1.1"
                            baseProfile="full"
                            width="300"
                            height="80"
                            xmlns="http://www.w3.org/2000/svg">

                            <polyline points="10, 60 260, 65 300, 5 240, 0" stroke="#ffe800" fill="none" strokeWidth="5" />
                        </svg>
                    </div>

                   
                    <button className={styles.loginBtn}>
                       
                        Login
                   
                        <svg
                            className={styles.svg1}
                            version="1.1"
                            baseProfile="full"
                            width="300"
                            height="50"
                            xmlns="http://www.w3.org/2000/svg">

                            <polyline points="25, 50 5, 25 25, 5 300, 10" stroke="#095f80" fill="none" strokeWidth="5" />
                        </svg>

                        <svg
                            className={styles.svg2}
                            version="1.1"
                            baseProfile="full"
                            width="300"
                            height="80"
                            xmlns="http://www.w3.org/2000/svg">

                            <polyline points="10, 60 260, 65 300, 5 240, 0" stroke="#ffe800" fill="none" strokeWidth="5" />
                        </svg>

                    </button>

                    <span>OR</span>

                    <button className={styles.loginBtn}>
                        <Link to="/warriors/signup">
                        Signup
                        </Link>
                        <svg
                            className={styles.svg1}
                            version="1.1"
                            baseProfile="full"
                            width="300"
                            height="50"
                            xmlns="http://www.w3.org/2000/svg">

                            <polyline points="25, 50 5, 25 25, 5 300, 10" stroke="#095f80" fill="none" strokeWidth="5" />
                        </svg>

                        <svg
                            className={styles.svg2}
                            version="1.1"
                            baseProfile="full"
                            width="300"
                            height="80"
                            xmlns="http://www.w3.org/2000/svg">

                            <polyline points="10, 60 260, 65 300, 5 240, 0" stroke="#ffe800" fill="none" strokeWidth="5" />
                        </svg>

                    </button>

                </form>

            </MainContainer>

            <Footer />
        </div>
    );
}


export { LoginPage }