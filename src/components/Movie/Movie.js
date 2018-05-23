import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Overdrive from 'react-overdrive';
import styled from 'styled-components';
// Functinoal state component try to use when no lifecycle methods or state
// manipulation we have access to 'props'

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const Movie = ({movie}) => (
    <div>
        <Link to={`/${movie.id}`}>
            <Overdrive id={movie.id}>
                <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
            </Overdrive>
        </Link>
    </div>
);

export default Movie;

//proptypes

Movie.propTypes = {
    movie: PropTypes
        .shape({title: PropTypes.string.isRequired})
        .isRequired
};

//styled components
export const Poster = styled.img `
box-shadow: 0 0 35px black;

`;
