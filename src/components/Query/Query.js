import React from 'react';

const query = (props) => {
    return (
        <p onClick={props.clicked}>{props.query}</p>
    )
}

export default query