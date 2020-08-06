import React, { useState, Fragment } from 'react';
import { Header, Footer, MainContainer } from '../../components';
import styles from '../login/login.module.css';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


function SignupPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [methodUsed, setMethodUsed] = useState(true); //true means start now
    const [startDate,setStartDate]=useState(new Date());

    return (
        <div>
            <Header />

            <MainContainer>

                <p className={styles.pleaseLoginText}>Please enter your warrior identity to Signup</p>

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

                    

                    <button className={styles.loginBtn} onClick={(e)=>{
                        e.preventDefault();
                        setMethodUsed(!methodUsed)
                        setStartDate(new Date())
                    }}>
                       
                       Start Now
                  
                       <svg
                           className={styles.svg1}
                           version="1.1"
                           baseProfile="full"
                           width="300"
                           height="50"
                           xmlns="http://www.w3.org/2000/svg">

                           <polyline points="25, 50 5, 25 25, 5 300, 10" stroke="#095f80" fill={methodUsed ? "#095f80":"none"} strokeWidth="5" />
                       </svg>

                       <svg
                           className={styles.svg2}
                           version="1.1"
                           baseProfile="full"
                           width="300"
                           height="80"
                           xmlns="http://www.w3.org/2000/svg">

                           <polyline points="10, 60 260, 65 300, 5 240, 0" stroke="#ffe800" fill={methodUsed?"#fee92f":"none"} strokeWidth="5" />
                       </svg>

                   </button>

                    {!methodUsed ? <Fragment>                    
                   <span>OR</span>
                        
                   <button className={styles.loginBtn} onClick={(e)=>{
                       e.preventDefault();
                   }}>
                       
                       Select Date
                  
                       <svg
                           className={styles.svg1}
                           version="1.1"
                           baseProfile="full"
                           width="300"
                           height="50"
                           xmlns="http://www.w3.org/2000/svg">

                           <polyline points="25, 50 5, 25 25, 5 300, 10" stroke="#095f80" fill={!methodUsed ? "#095f80":"none"} strokeWidth="5" />
                       </svg>

                       <svg
                           className={styles.svg2}
                           version="1.1"
                           baseProfile="full"
                           width="300"
                           height="80"
                           xmlns="http://www.w3.org/2000/svg">

                           <polyline points="10, 60 260, 65 300, 5 240, 0" stroke="#ffe800" fill={!methodUsed?"#fee92f":"none"} strokeWidth="5" />
                       </svg>

                   </button>

                        <Calendar value={startDate} onChange={date=>setStartDate(date)}/>
                        </Fragment>
                    :null}
                    
                   
                    <button className={styles.loginBtn} onClick={(e)=>{
                        e.preventDefault();
                        console.log(username, password, startDate, methodUsed);
                    }}>
                       
                        Signup
                   
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


export { SignupPage }