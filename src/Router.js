import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom'
import HomePageContainer from './components/HomePageContainer.js'

let About = () => (<h1>This is cool</h1>)

const Router = () => (
    <HashRouter>
        <div>
            <header/>
            <Switch>
                <Route exact path='/' component={HomePageContainer}/>
                <Route path='/about' component={About}/>
            </Switch>
        </div>
    </HashRouter>
)

export default Router;