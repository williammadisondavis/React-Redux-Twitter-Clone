// import React from 'react';
// import ReactDOM from 'react-dom';
// import Router from './Router.js'
// import {createStore} from 'redux';
// import { provider } from 'react-redux';
// // import './index.css';

// let reducer = (oldState, action) => {
//     let doer = reducers[action.type];
//     if (action.type ==== 'BLOW_UP') {
//         return {
//             ...oldState,
//             isBlowingUp: true
//         };
//     } else if (action.type === 'jaklsf') {
//         return {oldState,
//         isBlowingup: False
//     };
//     } else {
//         return oldState
//     }
// }

// let store = createStore(
//     reducer,
//     initialState,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// let initialState = {
//     wassups: [],
//     newWassup: ''
// }



// let app = 
// <Provider store={store}>
//     <Router />
//     </Provider>

// ReactDOM.render(<Router />, document.querySelector('#root'));

// render app

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router.js'
import {createStore} from 'redux';
import { Provider } from 'react-redux';

// let loadWassups = (oldState, action) => {
//     return 
// }

let addNewWassup = (oldState, action) => {
    let newWassup = [...oldState.wassups, action.data]
    return newWassup
};

// let deleteWassup = (oldState, action) => {
//     return 
// };

let reducers = {
    'ADD_NEW_WASSAP': addNewWassup
    // 'DELETE_WASSUP': deleteWassup
};

let reducer = (oldState, action) => {
    let doer = reducers[action.type];
	return doer ? doer(oldState, action) : oldState;
};

let initialState = {
  posts: [
    {
    "user": "Will",
    "id": "1",
    "content": "yep, it worked"
    }
  ],
  newWassup: ''
};

let store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let app =
  <Provider store={store}>
    <Router />
  </Provider>

ReactDOM.render(app, document.getElementById('root'));
