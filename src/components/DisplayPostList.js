import React from 'react'
import PostRow from './PostRow.js'
import { connect } from 'react-redux'

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

export default connect(state => state)(DisplayPostList);