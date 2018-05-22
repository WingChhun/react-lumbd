/* eslint react/no-did-mount-set-state: 0 */
import React, {Component} from 'react';
//browserrouter
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import logo from './logo.svg'; //import react-lumbd logo
import './App.css';

//Import Components
import Movie from './components/Movie/Movie';
import MovieList from "./components/Movie/MoviesList";

const App = () => (
    <Router>
        <div className="App">
            <header className="App-header">
                <Link to="/">
                    <img src={logo} className="App-logo" alt="logo"/>
                </Link>
            </header>
            <Switch>
                <Route exact path="/" component={MovieList}/>
                <Route path="/:id" component={Test}></Route>
            </Switch>
        </div>
    </Router>
);

//can access router :<contents> it is stored within Match
const Test = ({match}) => (
    <h1>{match.params.id}</h1>
)
export default App;