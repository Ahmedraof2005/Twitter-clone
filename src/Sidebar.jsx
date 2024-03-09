import React from 'react'
import './App.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import Sidebar0ption from './Sidebar0ption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        {/* Twitter Icon */}
        <TwitterIcon className='sidebar__twitterIcon' />

        {/* Sidebar0ption */}
        <Sidebar0ption active Icon={HomeIcon} text="Home" />
        <Sidebar0ption Icon={SearchIcon} text="Explore" />
        <Sidebar0ption Icon={NotificationsNoneIcon} text="Notification" />
        <Sidebar0ption Icon={MailOutlineIcon} text="MailOutlineIcon" />
        <Sidebar0ption Icon={BookmarkBorderIcon} text="BookmarkBorderIcon" />
        <Sidebar0ption Icon={ListAltIcon} text="ListAltIcon" />
        <Sidebar0ption Icon={PermIdentityIcon} text="PermIdentityIcon" />
        <Sidebar0ption Icon={MoreHorizIcon} text="MoreHorizIcon" />

        <Button variant='outlined' className='sidbar__twee' fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar