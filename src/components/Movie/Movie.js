import React from 'react';
import PropTypes from 'prop-types';

// Functinoal state component try to use when no lifecycle methods or state
// manipulation we have access to 'props'

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const Movie = ({movie}) => (
    <div>
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
    </div>
);

export default Movie;

//proptypes

Movie.propTypes = {
    movie: PropTypes
        .shape({title: PropTypes.string.isRequired})
        .isRequired
};
