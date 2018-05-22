/* eslint react/no-did-mount-set-state: 0 */
import React, {Component} from 'react';
//browserrouter
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import logo from './logo.svg'; //import react-lumbd logo import
// './MoviesList.css'; Import Components
import Movie from './Movie';

class MoviesList extends Component {
    //Initialize state
    state = {
        movies: []
    }

    //async await function to make request to API
    async componentDidMount() {
        try {
            const token = "adf9e0e13c83fa0507f265904cb93956";
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${token}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
            const movies = await res.json();

            this.setState({movies: movies.results});
            //console.log(this.state.movies);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
            <h1>Test</h1>
                {this
                    .state
                    .movies
                    .map(movie => <Movie key={movie.id} movie={movie}/>)
}
            </div>
        )
    }
}

//export default APP component
export default MoviesList;
