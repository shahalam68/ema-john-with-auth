import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
const SignUp = () => {

    const [error, setError] = useState('');

    const {createUser} = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        setError('');
        if (password !== confirm) {
            setError('Your Password did not matched')
        }
        else if (password.length < 6) {
            setError('Password must be 6 charecters longer ')
            return;
        }
        createUser(email,password)
        .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch((error) => {
            console.log(error);
            setError('errro.message')
        })
    }


    return (
        <div className='form-container'>
            <h4 className='form-title'>Sign Up</h4>
            <form onSubmit={handleSignUp} >
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="Password" id="password" required />
                </div>
                <div className='form-control'>
                    <label htmlFor='confirm'>Confirm Password</label>
                    <input type="password" name="confirm" id="confirm" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
                <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
                <p className='text-error'>{error}</p>
            </form>
        </div>
    );
};

export default SignUp;