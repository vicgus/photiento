import React from 'react';
import classes from './Image.css'

const image = (props) => {
    return (
        <div>
            <img 
                src={props.thumbUrl} alt='' 
                className={classes.ImgDiv}
                onClick={props.clicked} />
        </div>
    )
}

export default image;