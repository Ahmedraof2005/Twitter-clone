import React, { useState , useEffect } from 'react'
import './App.css';
import Tweetbox from './Tweetbox';
import Post from './Post';
import db from './firebase';
import { onSnapshot, collection, query } from "firebase/firestore";
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import Sidebar0ption from './Sidebar0ption';


const Feed = ({Icon , text }) => {
  const [menu , setmenu] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // db.collection("posts").onSnapshot((snapshot) =>
    //   setPosts(snapshot.docs.map((doc) => doc.data()))
    // );
    const q = query(collection(db, "posts"))

    // if you call unsub() it will stop the listener
    const unsub = onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map(
        (doc) => {
          // console.log({data: doc.data() , id: doc.id})
          return {data: doc.data() , id: doc.id};
        } 
        ))   // console.log("I am listening to the database 🤞")
    });
  }, []);
  return (
    <div className='feed'>
        {/* Header */}
        <div className='feed__header'>
        
      <RightMenu>
         <CustomMenu onClick={ ()=> setmenu(true) } />
      </RightMenu>
      
      <BurgerNav className='burger' show={menu}>
        <CloseWrapper>
            <CustomClose onClick={ ()=> setmenu(false) } />
        </CloseWrapper>
      <Sidebar />
      </BurgerNav>


         <h2>Foryou</h2>
         <h2>Following</h2>
        </div>

        {/* Tweet Box */}
        <Tweetbox />

      {posts.map(post =>(
        <Post
        displayName={post.data.displayName}
        username={post.data.username}
        verified={post.data.verified}
        text={post.data.text}
        avatar={post.data.avatar}
        image={post.data.image}
        id={post.id} />
      ))}
    </div>
  )
}

export default Feed



const RightMenu = styled.div`
display: flex;
align-items: center;

`
const CustomMenu = styled(MenuIcon)`
cursor: pointer;

`

const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color: white;
width: 300PX;
z-index: 10;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
overflow-y: scroll;
scrollbar-display: none;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.2s ease-in ;
.sidebar{
  display: block;
}
@media (min-width:960px){
 display: none;
}

`
const CustomClose = styled(CloseIcon)`
cursor: pointer;
`
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end
`