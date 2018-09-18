import React from 'react';
import classes from './SearchDiv.css';
import back from '../../assets/icons/Cross.svg'

const searchDiv = (props) => {
        return(
            <div className={classes.SearchDiv}>
                <p className={classes.Search}>SEARCH</p>
                <input 
                    className={classes.Input} 
                    type='text'/>
                <p className={classes.Button}>ADD</p>
                <img className={classes.Cross} 
                    src={back} 
                    alt='' 
                    placeholder="type"
                    onClick={props.back}/> 
            </div>
        )
    }


export default searchDiv;