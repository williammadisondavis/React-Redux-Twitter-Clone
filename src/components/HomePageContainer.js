import React from 'react';
import  HomePage  from './HomePage.js';
import { connect } from 'react-redux';


let HomePageContainer = connect(state => state)(HomePage);


// class HomePageContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         tweets: []
    //     };
    // }
    // componentDidMount() {
    //     fetch('http://0.tcp.ngrok.io:11140/wassups.json')
    //         .then(response => response.json())
    //         .then(data =>
    //             this.setState({ tweets: data }))
    // };

    // render() {
    //     const { tweets } = this.state;
    //     console.log(tweets)

    //     let deletePost = (userID) => {
    //         let updatedState = tweets.filter(post => {
    //             return post.id !== userID
    //         })
    //         this.setState({ tweets: updatedState })
    //     }

    //     let addPost = (post) => {
    //         let newState = [...tweets, post];
    //         this.setState({ tweets: newState })
    //     }
    //     return (

    //         <HomePage posts={tweets} addPost={addPost} deletePost={deletePost} />
    //     )
    // }
// }

// let HomePageSmart = connect(state => state)(HomePageContainer);

export default HomePageContainer;