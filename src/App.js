import React, {Component} from 'react';

import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

//import components
import MovieDetail from "./components/Movie/MovieDetail";
import MovieList from "./components/Movie/MoviesList";
class App extends Component {
    render() {
        return (
            <HashRouter basename={process.env.PUBLIC_URL}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit
                        <code>src/App.js</code>
                        and save to reload.
                    </p>
                    <Switch>
                        <Route exact path="/" component={MovieList}/>
                        <Route exact path="/:id" component={MovieDetail}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;
