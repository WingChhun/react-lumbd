/* eslint react/no-did-mount-set-state: 0 */
import React, {Component} from 'react';
//browserrouter
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg'; //import react-lumbd logo
import './App.css';

//Import Components
import Movie from './components/Movie/Movie';
import MovieList from "./components/Movie/MoviesList";

class App extends Component {
    //Initialize state
    state = {
        movies: []
    }

    // async await function to make request to API async componentDidMount() { try {
    //         const token = "adf9e0e13c83fa0507f265904cb93956";         const res =
    // await
    // fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${token}&language=
    // e
    // n-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
    // ;         const movies = await res.json();         this.setState({movies:
    // movies.results});         console.log(this.state.movies);     } catch (e) {
    // console.log(e);     } }

    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </header>
                    <Switch>
                        <Route path="/" component={MovieList}/>
                        <Route path="/test" component={Test}></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

const Test = () => (
    <h1>TEST COMPONENT</h1>
)
//export default APP component
export default App;
