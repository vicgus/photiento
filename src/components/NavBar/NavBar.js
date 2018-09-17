import React from 'react';
import classes from './NavBar.css';

const navBar = (props) => {
    return(
        <div className={classes.NavDiv}>
            {/* <div className={classes.LineLeft}></div> */}
            <div className={classes.center}>
                <h1 className={classes.TagHeader}>
                    {props.query}
                </h1> 
            </div>
            {/* <div className={classes.LineRight}></div> */}
            {/* <div className={classes.LineRightVert}></div> */}
        </div>
    )
}

export default navBar;