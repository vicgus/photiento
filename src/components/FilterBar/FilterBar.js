import React from 'react';
import classes from './FilterBar.css';
import searchicon from '../../assets/icons/Search.svg';

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
            {/* <div className={classes.Line}></div> */}
        </div>
    )
}

export default filterBar;
