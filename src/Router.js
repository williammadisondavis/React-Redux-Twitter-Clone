import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage.js'

let About = () => (<h1>This is cool</h1>)

const Router = () => (
    <HashRouter>
        <div>
            <header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/about' component={About}/>
            </Switch>
        </div>
    </HashRouter>
)

export default Router;