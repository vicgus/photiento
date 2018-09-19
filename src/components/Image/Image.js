import React from 'react';
import classes from './Image.css'

//Image container for each image in fullview/imagelist.
const image = (props) => {
    return (
            <img 
                src={props.smallUrl} 
                alt='' 
                className={classes.Img}
                onClick={props.clicked} />
    )
}

export default image;

