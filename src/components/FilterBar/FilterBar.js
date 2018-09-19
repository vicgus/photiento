import React from 'react';
import classes from './FilterBar.css';
import searchicon from '../../assets/icons/Search.svg';

//Receives all queries as props and makes them selectable and deletable. Magnifying glass image to enable tag search.
const filterBar = (props) => {
    return(
        <div className={classes.LeftBar} align={"center"}>
            <img 
                onClick={props.searchClick}
                src={searchicon} 
                alt='' 
                className={classes.Search}/>
            <div className={classes.SelDiv} >
                {props.allQueries}
            </div>
        </div>
    )
}

export default filterBar;
