import React from 'react';
import FormDocumentWrapper from './FormDocumentWrapper.js'
import DisplayPostList from './DisplayPostList.js'

let HomePage = ({ posts, addPost, deletePost }) => {
    console.log(posts)
    return (
        <div>
            <h1 className={'main-header'}>Wassap</h1>
            <FormDocumentWrapper addPost={addPost} />
            <DisplayPostList posts={posts} deletePost={deletePost} />
            <footer>Developer by Will Davis</footer>
            <a href="williamdav.is">My Website</a>
        </div>
    )
}

export default HomePage;

