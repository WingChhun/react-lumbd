/* eslint react/no-did-mount-set-state: 0 */
import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
//import Movie from './Movie';
import {Poster} from "./Movie";
const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

class MovieDetail extends PureComponent {
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

            <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
                <MovieInfo>

                    <Overdrive id={movie.id}>
                        <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
                    </Overdrive>
                    <div>
                        <h1>{movie.title}</h1>
                        <h3>{movie.release_date}</h3>
                        <p>{movie.overview}</p>
                    </div>
                </MovieInfo>
            </MovieWrapper>
        )
    }
}

//export default APP component
export default MovieDetail;

const MovieWrapper = styled.div `
position:relative;
padding-top:50vh;
background-size:cover;
background:url(${props => props.backdrop}) no-repeat;
`;

const MovieInfo = styled.div `

background:white;
text-align:left;
padding:2rem 10%;
display:flex;
> div
{
    margin-left:20px;
}
img
{
    position:relative;
    top:5px;
}
`;