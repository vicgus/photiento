import React from 'react';
import classes from './MainView.css';

const mainView = (props) => {
    const imOne=props.image;
    console.log(imOne);

    return(
        <div className={classes.Main}>
            <img src={imOne} alt=''/>
        </div>
    )
}

export default mainView;