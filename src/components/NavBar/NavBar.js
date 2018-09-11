import React, {Component} from 'react';
import classes from './NavBar.css';
import right from '../../assets/icons/Right.svg';
import left from '../../assets/icons/Left.svg';

class NavBar extends Component {
    render() {
        return(
            <div className={classes.NavDiv}>
                <div className={classes.center}>
                    <h1 className={classes.TagHeader}>
                        <img src={left} alt='' className={classes.imgl}/>
                        Art
                        <img src={right} alt='' className={classes.imgr}/>
                    </h1> 
                </div>
            </div>
        )
    }
}

export default NavBar;