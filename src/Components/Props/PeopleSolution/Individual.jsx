'use strict';

import PropTypes from 'prop-types';

const Individual = (props) => {

    return (
        <>
            <h3>{props.headerText}</h3>
            <p key={props.id}>Hello {props.name}, i see you're from {props.city}</p>
            <a href={props.website}>Link to their website</a>
        </>
    )
}

export default Individual;

Individual.defaultProps = {
    headerText: `if nothing is passed in, use this value`
}

Individual.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number
}