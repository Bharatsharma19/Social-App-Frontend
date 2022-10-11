import { MoreVert } from '@mui/icons-material'
import React from 'react'
import './post.css'

const Post = () => {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src="/assets/person/8.jpeg" alt="" />
                        <span className='postUsername'>Test User</span>
                        <span className='postDate'>10 Oct 2022</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey, It's my first Post</span>
                    <img className='postImg' src="/assets/post/1.jpeg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/like.png" alt="" />
                        <img className="likeIcon" src="assets/heart.png" alt="" />
                        <span className="postLikeCounter">7 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">4 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
