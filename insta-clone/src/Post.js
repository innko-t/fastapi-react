import React, {useState, useEffect} from 'react'
import './Post.css'

const BASE_URL = 'http://localhost:8000/'

function Post({ post }){
    
    const [ImageUrl, setImageUrl] = useState('')
    const [Comment, setComment] = useState([])
    useEffect(() => {
        if(post.image_url_type == 'aboslute'){
            setImageUrl(post.image_url)
        }else{
            setImageUrl(BASE_URL + post.image_url)
        }
    }, [])

    useEffect(() => {
        setComment(post.comments)
    }, [])
    return (
        <div className="post">
            <img
                className="post_image"
                src = {ImageUrl}
            />

            <h4 className='post_text'>{post.caption}</h4>
            <div className='post_creater'>photo by  <h5 className='creater'>{post.user.username}</h5></div>

            <div className='post_comments'>
                {
                    Comment.map((comment) => (
                        <p>
                            <strong>{comment.username}---</strong>{comment.text}
                        </p>
                    ))
                }

            </div>
        </div>
    )
}

export default Post