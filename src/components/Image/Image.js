import React from 'react';
import classes from './Image.css'

const image = (props) => {
    return (
            <img 
                src={props.smallUrl} alt='' 
                className={classes.Img}
                onClick={props.clicked} />
    )
}

export default image;

