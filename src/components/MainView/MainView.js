import React from 'react';
import ImageView from '../ImageView/ImageView';
import classes from './MainView.css';

const mainView = (props) => {
    console.log(props.allImages);
    if (props.fullView) {
        return(
            <div className={classes.Main}>
                    {props.allImages}
            </div>
        )
    }

    if (!props.fullView) {
        console.log(props.imageId);
        return <ImageView   id={props.imageId} 
                            back={props.back}/>
    }

}

export default mainView;