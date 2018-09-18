import React from 'react';
import classes from './InfoBar.css';
import heart from '../../assets/icons/Heart.svg';

const infoBar = (props) => {
    let imageCount = props.allImages.length;

    if (props.fullView) {
        return(
            <div className={classes.RightBar}>
                <div className={classes.SelDiv}>
                    <p>{imageCount} PHOTOS</p>
                </div>
                {/* <div className={classes.Line}></div> */}
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

    if (!props.fullView) {
        return(
            <div className={classes.RightBar}>
                <div className={classes.SelDiv}>
                    {/* <p>PHOTOGRAPHER</p> */}
                    <p href={userUrl}>{props.photographer.toUpperCase()} ON UNSPLASH.COM</p>
                    {/* <p>LOCATION</p> */}
                    <p>{location}</p>
                    {/* <p>DESCRIPTION</p> */}
                    <p>{description}</p>
                    <p></p>
                    <p><img src={heart} alt= ''/> {props.likes} </p>
                </div>
                {/* <div className={classes.Line}></div> */}
            </div>
        )
    }
}

export default infoBar;