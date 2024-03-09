import React from 'react'
import './App.css';
import { TwitterTimelineEmbed , TwitterShareButton , TwitterTweetEmbed } from 'react-twitter-embed';
import { SearchSharp } from '@mui/icons-material';

const Widget = () => {
  return (
    <div className='widget'>
      <div className="widget__input">
        <SearchSharp className='widget__search' />
        <input placeholder='Search Twitter' type="text" />
      </div>
      <div className="widget__widgetcontainer">
        <h2>What is happening</h2>
        <TwitterTweetEmbed tweetId="1511101695815733252" />
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="cleverqazi"
        options={{ height:400 }} 
        />
        <TwitterShareButton 
        url={"https://www.facebook.com/ahmed.abdelraof.714/"}
        options={{ text: "#I do this", via: "Ahmed" }}
        />
      </div>
        </div>
  )
}

export default Widget