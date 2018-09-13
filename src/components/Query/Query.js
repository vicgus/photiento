import React from 'react';
import classes from './Query.css'
import cross from '../../assets/icons/Cross.svg';

const query = (props) => {
    return (
        <div>
            <img 
                src={cross} 
                onClick={props.clickRemove}
                className={classes.Img} 
                alt=''/>
            <p  className={classes.Paragraph}
                onClick={props.clickSelect}>
            {props.query}
            </p>
        </div>
    )
}

export default query