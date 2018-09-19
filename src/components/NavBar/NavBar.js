import React from 'react';
import classes from './NavBar.css';

//Shows the tag name beneath the Mainview.
const navBar = (props) => {
    return(
        <div className={classes.NavDiv}>
            <div className={classes.center}>
                <h1 className={classes.TagHeader}>
                    {props.query}
                </h1>
            </div>
        </div>
    )
}

export default navBar;