import React from 'react'

let PostRow = ({ post, deletePost }) => {
    return (
        <li> {[post.user, post.content]}
            <button onClick={() => deletePost(post.id)}>
                Delete Post
            </button>
        </li>

    )
}

export default PostRow;