/* eslint react/no-did-mount-set-state: 0 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import Movie from './Movie';

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

class MovieDetail extends Component {
    //Initialize state
    state = {
        movies: [],
        movie: {}
    }

    //async await function to make request to API
    async componentDidMount() {
        try {
            const token = "adf9e0e13c83fa0507f265904cb93956";
            const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${token}`);
            const movie = await res.json();

            this.setState({movie});
            //console.log(this.state.movies);
        } catch (e) {
            console.log(e);
        }
    }

    render() {

        const {movie} = this.state;
        return (

            <div>
                <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title}/>
                <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
                <h1>{movie.title}</h1>
                <h3>{movie.release_date}</h3>
                <p>{movie.overview}</p>
            </div>
        )
    }
}

//export default APP component
export default MovieDetail;
