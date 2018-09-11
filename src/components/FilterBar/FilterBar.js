import React, {Component} from 'react';
import classes from './FilterBar.css';
import searchicon from '../../assets/icons/Search.svg';

class FilterBar extends Component {
    render() {
        return(
            <div className={classes.LeftBar} align={"center"}>
                <img src={searchicon} alt='' className={classes.Search}/>
                <div className={classes.SelDiv} >
                    <p>Art</p>
                    <p>City</p>
                    <p>Nature</p>
                    <p>Sunset</p>
                    <p>People</p>
                    <p>Architecture</p>
                </div>
            </div>
        )
    }
}

export default FilterBar;