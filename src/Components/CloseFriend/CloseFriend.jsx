import React from 'react'
import './closeFriend.css'

const CloseFriend = ({ user }) => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <li className="sidebarFriend">
            <img src={publicFolder + user.profilePicture} className='sidebarFriendImg' alt="" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}

export default CloseFriend
