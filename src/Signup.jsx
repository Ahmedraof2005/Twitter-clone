import { Twitter } from '@mui/icons-material'
import React, { useState } from 'react'
import { Auth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router';

const Signup = () => {

  const [email , setemail] = useState('');
  const [password , setpassword] = useState('');
  const [number , setnumber] = useState('');

  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth , email , password);
      console.log(userCredential)
      const user = userCredential.user;
      localStorage.setItem( 'accessToken' , user.accessToken);
      // localStorage.setItem( JSON.stringify());
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='sign'>
          <Twitter />
          <h1>Create account</h1>
          <fieldset>
            {/* <legend>Sign up</legend> */}
        <form action="/">
          <div className='name'>  
        <input className='name1' placeholder='First name' type="text" name='first name'/>
        <input className='name1' placeholder='Second name' type="text" name='second' />
          </div>
          <input value={email} onChange={(e) => setemail(e.target.value)} className='email' placeholder='Enter your email' type="email"  name='email' />
          <br /><br />
          <input className='email' placeholder='Enter your email again' type="email"  />
          <br /><br />
          <input value={password} onChange={(e) => setpassword(e.target.value)}  className='email' type="password"  placeholder='Enter password' name='password'/>
          <br /><br />
          <input value={number} onChange={(e) => setnumber(e.target.value)} className='email' type="tel"  placeholder='Enter your number' name='number'/>
          <br /><br />
          <input className='email' type="date" name="date" id="" />
          <br /><br />
          <input  type="submit" className='button' value="Sign up" />

        </form>
        </fieldset>
    </div>
  )
}

export default Signup