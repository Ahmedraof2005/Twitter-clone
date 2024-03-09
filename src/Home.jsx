import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'

const Home = () => {
  return (
    <div className="app">
        <Sidebar />
        <Feed />
        <Widget />

    </div>
  )
}

export default Home