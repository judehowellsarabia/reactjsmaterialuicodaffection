import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';



export function useForm(initialFValues, validateOnChange=false, validate){

    //initial Form Values
    const [values, setValues] = useState(initialFValues);
    
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const {name, value} = e.target

        setValues({
            ...values,
            [name]:value
        });

        if(validateOnChange)
            validate({[name]:value})

    }

    const resetForm = () => {
        setValues(initialFValues);
        setErrors({});
    }

    return{
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }
}

const useStyles = makeStyles(theme => ({
    root:{
        '& .MuiFormControl-root':{
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}));

export function Form(props){

    const classes = useStyles();

    //the children here refers to the children of the form
    //The onSubmit from the <Form> of EmployeeForm.js will be there inside the ...other

    const {children, ...other} = props;

    // return (
    //     <form className={classes.root} autoComplete="off">
    //         {props.children}
    //     </form>
    // )

     return (
         <form className={classes.root} autoComplete="off" {...other}>
             {props.children}
         </form>
     )
}