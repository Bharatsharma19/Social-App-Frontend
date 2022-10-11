import React from 'react'
import './home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Topbar from '../../Components/Topbar/Topbar'
import Rightbar from '../../Components/Rightbar/Rightbar'
import Feed from '../../Components/Feed/Feed'

const Home = () => {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>

        </>
    )
}

export default Home
