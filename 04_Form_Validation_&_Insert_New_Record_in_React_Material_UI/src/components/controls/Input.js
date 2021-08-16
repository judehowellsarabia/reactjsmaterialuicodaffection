import { TextField } from '@material-ui/core';
import React from 'react';

export default function Input(props){

    const {name, label, value, error=null, onChange} = props;

    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && {error:true, helperText:error})}
            /* if error is not null we will do the rest of the operations */
            //if not not null the error will be true and helperText will have value
            //the for having ... so that the error and helperText can become a part of the <TextField />
        />
    );


    // return (
    //     <TextField
    //         variant="outlined"
    //         label={label}
    //         name={name}
    //         value={value}
    //         onChange={onChange}
    //         error
    //         helperText="some validation error."

    //     />
    // );

}