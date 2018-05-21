import React, {Component} from 'react';
import logo from './logo.svg';
import Movie from "./components/Movie";
import './App.css';

class App extends Component {
    //DEFAULT STATE
    state = {

        movies: []
    }

    //async await with the API
    async componentDidMount()
    {
        const apiKey = "adf9e0e13c83fa0507f265904cb93956";
        const request = "https://api.themoviedb.org/3/discover/movie?api_key=adf9e0e13c83fa0507f265904cb9" +
                "3956&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=fa" +
                "lse&page=1";
        try {
            //make request, await data and stoer into res
            const res = await fetch(request);
            const movies = await res.json(); //store movies from res.json ,await for res to have something

            this.setState({movies: movies.results});
            console.log("This.state.movies", this.state.movies);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const {movies} = this.state;
        return (
            <div className="App">

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                </header>
                {movies.map((movie, index) => <Movie key={movie.id} movie={movie}/>)}
            </div>
        );
    }
}
export default App;