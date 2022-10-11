import { Bookmark, Chat, Event, ExitToApp, Group, RssFeed, VideoFile, WorkOutline } from '@mui/icons-material'
import React from 'react'
import "./sidebar.css"

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className='sidebarIcon' />
                        <span className="sidebarListItemText">
                            Feed
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className='sidebarIcon' />
                        <span className="sidebarListItemText">
                            Chats
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoFile className='sidebarIcon' />
                        <span className="sidebarListItemText">
                            Videos
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className='sidebarIcon' />
                        <span className="sidebarListItemText">
                            Groups
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className='sidebarIcon' />
                        <span className="sidebarListItemText">
                            Bookmarks
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className='sidebarIcon' />
                        <span className="sidebarListItemText">
                            Jobs
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className='sidebarIcon' />
                        <span className="sidebarListItemText">
                            Events
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <ExitToApp className='sidebarIcon' />
                        <span className="sidebarListItemText">
                            Others
                        </span>
                    </li>
                </ul>
                <button className='sidebarButton'>Show More</button>
                <hr className='sidebarHr' />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/person/8.jpeg" className='sidebarFriendImg' alt="" />
                        <span className="sidebarFriendName">Vivek Sharma</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/9.jpeg" className='sidebarFriendImg' alt="" />
                        <span className="sidebarFriendName">Aditya Gupta</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/7.jpeg" className='sidebarFriendImg' alt="" />
                        <span className="sidebarFriendName">Himanshu Singh</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/6.jpeg" className='sidebarFriendImg' alt="" />
                        <span className="sidebarFriendName">Kapil Sharma</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/5.jpeg" className='sidebarFriendImg' alt="" />
                        <span className="sidebarFriendName">Prasuk Jain</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/4.jpeg" className='sidebarFriendImg' alt="" />
                        <span className="sidebarFriendName">Aditya Naroliya</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/3.jpeg" className='sidebarFriendImg' alt="" />
                        <span className="sidebarFriendName">Anubhav Singh</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" className='sidebarFriendImg' alt="" />
                        <span className="sidebarFriendName">Shivam Sharma</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
