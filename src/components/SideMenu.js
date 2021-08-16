import { makeStyles, withStyles } from '@material-ui/core';
import React from 'react';

// withStyle & makeStyles

//convert it into their original syntax
//in order to do this we have to use two material ui method
// withStyle & makeStyles

// JSS syntax
/*const useStyles = {
    sideMenu: {
        display: 'flex',
        flexDirection:'column',
        position: 'absolute',
        left: '0',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053',
    }
};*/

// makeStyles
/*const useStyles = makeStyles({
    sideMenu: {
        display: 'flex',
        flexDirection:'column',
        position: 'absolute',
        left: '0',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053',
    }
});*/

// withStyles

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053',
    }
}

const SideMenu = (props) => {

    const {classes} = props;

    return (
        <div className={classes.sideMenu}>

        </div>
    )
}

export default withStyles(style)(SideMenu);

/*export default function SideMenu(){

    const classes = useStyles();

    console.log(classes);

    return(
        <div className={classes.sideMenu}>

        </div>
    );
}*/