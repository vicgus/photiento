import React from 'react';
import classes from './InfoBar.css';

const infoBar = (props) => {
    if (props.fullView) {
        return(
            <div className={classes.RightBar}>
                <div className={classes.SelDiv}>
                    <p>13.7 Photos</p>
                    <p>108 Users</p>
                    <p>5.9k Collections</p>
                </div>
        </div> 
        )
    }
    if (!props.fullView) {
        return(
            <div className={classes.RightBar}>
                <div className={classes.SelDiv}>
                    <p>Photographer</p>
                    <p>{props.photographer}</p>
                    <p>Location</p>
                    <p>{props.location}</p>
                    <p>Description</p>
                    <p>{props.description}</p>
                </div>
            </div>
        )
    }
}

export default infoBar;