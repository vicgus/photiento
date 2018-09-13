import React from 'react';
import classes from './InfoBar.css';

const infoBar = (props) => {
    let imageCount = props.allImages.length;
    let userCount = props.photographer;
    if (props.fullView) {
        return(
            <div className={classes.RightBar}>
                <div className={classes.SelDiv}>
                    <p>{imageCount} PHOTOS</p>
                    {/* <p>{userCount}Users</p>
                    <p>5.9k Collections</p> */}
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
                    <p>Likes</p>
                    <p>{props.likes}</p>
                </div>
            </div>
        )
    }
}

export default infoBar;