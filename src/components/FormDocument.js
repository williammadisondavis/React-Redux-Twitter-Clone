import React from 'react'

let FormDocument = (props) => {
    return (
        <form onSubmit={props.submitForm}>
            <input type='text' value={props.user} onChange={(event) => { props.tweetBox(event, 'user') }} />
            <input type='text' value={props.content} onChange={(event) => { props.tweetBox(event, 'content') }} />
            <button type='submit'>Click me</button>
        </form>
    )
}

export default FormDocument;