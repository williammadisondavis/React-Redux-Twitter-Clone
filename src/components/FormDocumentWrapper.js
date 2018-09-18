import React from 'react'
import FormDocument from './FormDocument.js'


class FormDocumentWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            content: ''
        }
    }
    render() {
        const { addPost } = this.props;
        const { user, content } = this.state;
        let tweetBox = (event, updated) => {
            let newPost = {}
            newPost[updated] = event.target.value;
            this.setState(newPost);
        };
        let submitForm = (event) => {
            event.preventDefault();
            addPost(this.state)

        }
        return (
            <FormDocument submitForm={submitForm} tweetBox={tweetBox} user={user} content={content} />
        )
    }
}

export default FormDocumentWrapper;