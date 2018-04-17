import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import ConoceContainer from './components/conoceMás/ConoceContainer'
import RetadoresContainer from './components/retadores/RetadoresContainer'

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer}/>
        <Route path="/sabermas" component={ConoceContainer} />
        <Route path="/retadores" component={RetadoresContainer} />
    </Switch>
);