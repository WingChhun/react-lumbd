import React, {Component} from 'react';
import PropTypes from 'prop-types';

//prop types
export default class Movie extends Component
{
    // prop type configuration proptypes.shape allow us to proptype check what is
    // within the object
    static propTypes = {
        movie: PropTypes.shape({title: PropTypes.string.isRequired}),
        desc: PropTypes.string.isRequired
    }

    //default propTypes
    static defaultProps = {
        desc: "Description not available"

    }

    //render component cutoff
    render()
    {
        //Pull movie from props
        const {title, desc} = this.props.movie;
        return (
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        )
    }

}