import React, {Component} from 'react';
import classes from './InfoBar.css';

class InfoBar extends Component {
    render() {
        return(
            <div className={classes.RightBar}>
                <div className={classes.SelDiv}>
                    <p>13.7k Photos</p>
                    <p>108 Users</p>
                    <p>5.9k Collections</p>
                </div>
            </div>
        )
    }
}

export default InfoBar;