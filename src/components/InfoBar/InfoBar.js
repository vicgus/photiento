import React from 'react';
import classes from './InfoBar.css';
import heart from '../../assets/icons/Heart.svg';

//Container for meta information about each tag in listed images view and each image in imageView.
const infoBar = (props) => {
    let imageCount = props.allImages.length;

    if (props.fullView) {
        return(
            <div className={classes.RightBar}>
                <div className={classes.SelDiv}>
                    <p>{imageCount} PHOTOS</p>
                </div>
        </div> 
        )
    }

    let location = props.location;
    if (location) {
        location = location.toUpperCase();
    }

    let description = props.description;
    if (description) {
        description = description.toUpperCase();
    }

    let userUrl = props.userUrl;
    console.log(userUrl);

    if (!props.fullView) {
        return(
            <div className={classes.RightBar}>
                <div className={classes.SelDiv}>
                    <p><a className={classes.User} href={userUrl}>{props.photographer.toUpperCase()}</a> ON UNSPLASH.COM</p>
                    <p>{location}</p>
                    <p>{description}</p>
                    <p><img src={heart} alt= ''/> {props.likes} </p>
                </div>
            </div>
        )
    }
}

export default infoBar;