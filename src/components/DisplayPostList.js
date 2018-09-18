import React from 'react'
import PostRow from './PostRow.js'

let DisplayPostList = ({ posts, deletePost }) => {
    return (
        <div>
            <ul>
                {posts.map(userPost =>
                    <PostRow
                        key={userPost.id}
                        post={userPost}
                        deletePost={deletePost}
                    />)}
            </ul>
        </div>
    )
}

export default DisplayPostList;