import React from 'react'
import Twitter from '@mui/icons-material/Twitter'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [email , setemail] = useState('');
    const [password , setpassword] = useState('');
  
    const navigate = useNavigate();
  
    const handelSubmit = async (e) => {
      e.preventDefault();
      try {
        const userCredential = await signInWithEmailAndPassword(auth , email , password);
        console.log(userCredential)
        const user = userCredential.user;
        localStorage.setItem('accessToken' , user.accessToken);
        localStorage.setItem('user' , JSON.stringify());
        navigate('/home');
      } catch (error) {
        console.error(error);
      }
    }


    return (
    <div className='sign'>
    <Twitter />
    <h1>Log In</h1>
    <fieldset className='field'>
      {/* <legend>Sign up</legend> */}
  <form action="/home">
    <input value={email} onChange={(e) => setemail(e.target.value)} className='logo' placeholder='Enter your email' type="email" />
    <br /><br /><br />
    <input value={password} onChange={(e) => setpassword(e.target.value)} className='logo' type="password"  placeholder='Enter password'/>
    <br /><br />
    <div className='check'>
      <div>
        <input type="checkbox" id='remmber' />
        <label for='remmber' >Remmber me</label>
      </div>
    <a href="#">Forget Password</a></div>
    <br /><br />
    <input  type="submit" className='button buto' value="Log In"  />
    <br /><br />
    <div className='check'>
    <span>Dont have an account?</span>
    <a href="/Signup">Register</a>
    </div>
  </form>
  </fieldset>
</div>
  )
}

export default Login