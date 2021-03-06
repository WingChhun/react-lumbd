/* eslint react/no-did-mount-set-state: 0 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Movie from './Movie';
import styled from "styled-components"; //styled components
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
            <MovieGrid>
                {this
                    .state
                    .movies
                    .map(movie => <Movie key={movie.id} movie={movie}/>)
}
            </MovieGrid>
        )
    }
}

//export default APP component
export default MoviesList;

//Styled Components, CSS -GRID inside backticks is css
const MovieGrid = styled.div `
display:grid;
padding:1rem;
grid-template-columns:repeat(6,1fr);
grid-row-gap:1rem;
`;
