import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email,password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            from.reset()
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='form-container'>
            <h4 className='form-title'>Login</h4>
            <form onSubmit={handleLogin}>
            <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="Password" id="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to ema-john? <Link to='/signup'>Sign Up</Link></small></p>
        </div>
    );
};

export default Login;