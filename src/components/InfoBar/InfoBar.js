import React, {Component} from 'react';
import classes from './InfoBar.css';

class InfoBar extends Component {
    render() {
        return(
            <div className={classes.RightBar}>
                <div className={classes.SelDiv}>
                    <p>Photographer</p>
                    <p>{this.props.photographer}</p>
                    <p>Location</p>
                    <p>{this.props.location}</p>
                    <p>Description</p>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default InfoBar;