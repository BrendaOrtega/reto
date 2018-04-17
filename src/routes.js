import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import ConoceContainer from './components/conoceMás/ConoceContainer'

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer}/>
        <Route path="/sabermas" component={ConoceContainer} />
    </Switch>
);