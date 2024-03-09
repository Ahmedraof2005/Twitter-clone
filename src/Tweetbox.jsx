import React, { useState } from 'react'
import './App.css';
import { Avatar, Button } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import  db  from './firebase';

const Tweetbox = () => {
    const [tweetMessage , setTweetMessage] = useState("");
    const [tweetImage , setTweetImage] = useState("");

    const sendTweet = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, 'posts'), {
   
                avatar :"./imgme.jpeg",
                displayName :"Ahmed Raof",
                username :"Ahmed-1",
                verified : true,
                text : tweetMessage,
                image : tweetImage
               });

               
    console.log('Document written with ID: ', docRef.id);
} 
catch (error) {
  console.error('Error adding document: ', error);
}

        
            setTweetMessage('');
            setTweetImage('');
    };
          
    return (
    <div className='tweetbox'>
       <form action="">
        <div className='tweetbox__input'>
            <Avatar src='./imgme.jpeg' />
            <input 
            onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder='What is happening'
            type="text" 
        />
       

        </div>
             <input 
             value={tweetImage}
             onChange={e => setTweetImage(e.target.value)}
             className='tweetbox__imginput'
             placeholder='Inter image URL'/>
        <Button
         onClick={sendTweet}
         type="submit"
         className='tweetbutton'
         >Tweet</Button>
       </form>
    </div>
  )
}

export default Tweetbox



