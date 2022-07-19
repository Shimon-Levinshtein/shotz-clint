import React, { useState } from 'react';
import styles from "./Login.module.scss";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';



const Login = props => {


    const navigate = useNavigate();



    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    // useEffect(() => {
    //     if (usersData.type === 'mailIsNotExisist') {
    //         setEmailErr('המייל זה לא קיים במערכת! הקלד מייל תקין. ');
    //     };
    //     if (usersData.type === 'invalidPassword') {
    //         setPasswordErr('הסיסמה לא נכונה!');
    //     };
    //     if (usersData.type === 'succeeded') {
    //         navigate("/");
    //         props.variableCleaning('login');
    //         props.changeValueUser('isLogin', true);
    //         const cookies = new Cookies();
    //         // cookies.set('mailCrypto', CryptoJS.AES.encrypt(email.trim().toLowerCase(), process.env.REACT_APP_SECRET_KEY).toString(), { path: '/' });
    //         // cookies.set('passwordCrypto', CryptoJS.AES.encrypt(password.trim(), process.env.REACT_APP_SECRET_KEY).toString(), { path: '/' });

    //     };
    // }, [usersData]);

    const handleSudmit = () => {
        if (emailErr, passwordErr) return;
        signInWithEmailAndPassword(auth, email, password)
        .then(user => {
            console.log('signInWithEmailAndPassword ...... ', user);
            // setIsLoading(true);
            // history.push('/');
            // setIsLoading(true);
        }).catch(error => {
            console.log('error.message ...... ', error.message);
            // setErrorMessage(error.message);
            // errMessageService.showErrMessage(error.message);
        });
    };
    const emailChange = (e) => {
        setEmailErr('');
        setEmail(e.currentTarget.value);
    };
    const passwordChange = (e) => {
        setPasswordErr('');
        setPassword(e.currentTarget.value);
    };
    // const responseGoogle = (result) => {
    //     props.LoginFunGoogle(result)
    // };
    // const responseGoogleOnFailure = (result) => {
    //     alert('החיבור נכשל נסה מאוחר יותר')
    // };
    // const creatUser = () => {
    //     if (emailErr, passwordErr) return;
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then(user => {
    //         console.log(user);
    //         // setIsLoading(true);
    //         // history.push('/');
    //     }).catch(error => {
    //         console.log(error);
    //         // setErrorMessage(error.message);
    //         // errMessageService.showErrMessage(error.message);
    //     });
    // };
    return (
        <div className={styles.continer}>
            <div className={styles.box}>
                <h2>על מנת לגשת לחשבונך מלא את פרטיך כאן</h2>

                <div className={styles.contining_properties_elements}>
                    <input onChange={emailChange} value={email} type="email" placeholder="מייל" />
                    {emailErr ? <div className={styles.err_message}>{emailErr}</div> : ''}
                </div>
                <div className={styles.contining_properties_elements}>
                    <input onChange={passwordChange} value={password} type="password" placeholder="סיסמה"></input>
                    {passwordErr ? <div className={styles.err_message}>{passwordErr}</div> : ''}
                </div>
                <div dir='auto' onClick={() => navigate("/reset-password")} className={styles.resetPassword}>שכחתי סיסמא...</div>
                <div onClick={() => handleSudmit()} className={styles.login_but}>התחבר</div>
                {/* <div onClick={() => creatUser()} className={styles.login_but}>צור חשבון</div> */}
                {/* <div className={styles.googel_but}> */}
                {/* <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogleOnFailure}
                        cookiePolicy={'single_host_origin'}
                    >
                        <div className={styles.googel_but_in}>
                            <img src={googelLogo} />
                            <p>התחבר עם גוגל</p>
                        </div>
                    </GoogleLogin> */}

                {/* </div> */}
                {/* <div className={styles.title_but}>
                    אין לך עדיין חשבון?
                </div> */}
                {/* <Link to="/sign-up">
                    <div onClick={() => props.variableCleaning('login')} className={styles.other_but}>צור חשבון</div>
                </Link> */}
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(Login);