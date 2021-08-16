import { FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup, TextField } from '@material-ui/core';
import { TextFields } from '@material-ui/icons';
import React, {useState,useEffect} from 'react';
import Controls from '../../components/controls/Controls';
import {useForm, Form} from '../../components/useForm';
import * as employeeService from '../../services/employeeService';

const genderItems = [
    {id: 'male', title: 'Male'},
    {id: 'female', title: 'Female'},
    {id: 'other', title: 'Other'},
];

const initialFValues = {
    id:0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

export default function EmployeeForm(){
    
    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "":"This field is required";
        if('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "":"Email is not valid.";
        if('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "":"Minimum 10 numbers required.";
        if('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length !==0 ? "":"This field is required.";
        
        setErrors({
            ...temp
        });

        if(fieldValues === values)
            return Object.values(temp).every(x => x === "");
        
            //console.log("initialFValues ");
            //console.log(initialFValues);

            //console.log("fieldValues ");
            //console.log(fieldValues);

            //console.log("values ");
            //console.log(values);

    }

    /*const validate = (fieldValues = values) => {
        let temp = {...errors}
        if('fullName' in fieldValues)
            temp.fullName = values.fullName ? "":"This field is required";
        if('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(values.email) ? "":"Email is not valid.";
        if('mobile' in fieldValues)
            temp.mobile = values.mobile.length > 9 ? "":"Minimum 10 numbers required.";
        if('departmentId' in fieldValues)
            temp.departmentId = values.departmentId.length !=0 ? "":"This field is required.";
        setErrors({
            ...temp
        });

        if(fieldValues == values)
            return Object.values(temp).every(x => x == "");
    }*/

    // const { values, setValues, handleInputChange } = useForm(initialFValues);

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

   // console.log(initialFValues);

   /* const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFValues);*/

    const handleSubmit = (e) => {

        e.preventDefault();

        if(validate())
            //window.alert('testing...');
            employeeService.insertEmployee(values);
            resetForm();
    }

    return(
            <Form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={6}>

                        <Controls.Input 
                            name="fullName"
                            label="Name"
                            value={values.fullName}
                            onChange={handleInputChange}
                            error={errors.fullName}
                        />

                        {/* <Controls.Input 
                            name="fullName"
                            label="Name"
                            value={values.fullName}
                            onChange={handleInputChange}
                    
                        /> */}

                        <Controls.Input 
                            label="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                            error={errors.email}
                        />

                        <Controls.Input 
                            label="Mobile"
                            name="mobile"
                            values={values.mobile}
                            onChange={handleInputChange}
                            error={errors.mobile}
                        />

                        {/* {console.log(values.mobile)} */}

                        <Controls.Input 
                            label="City"
                            name="city"
                            value={values.city}
                            onChange={handleInputChange}
                        />

                    </Grid>
                    <Grid item xs={6}>
                        <Controls.RadioGroup 
                            name="gender"
                            label="Gender"
                            values={values.gender}
                            onChange={handleInputChange}
                            items={genderItems}
                        />  
                        <Controls.Select 
                            name="departmentId"
                            label="Department"
                            value={values.departmentId}
                            onChange={handleInputChange}
                            options={employeeService.getDepartmentCollection()}
                            error={errors.departmentId}
                        />               

                        <Controls.DatePicker 
                            name="hireDate"
                            label="Hire Date"
                            value={values.hireDate}
                            onChange={handleInputChange}
                        />

                        <Controls.Checkbox 
                            name="isPermanent"
                            label="Permanent Employees"
                            value={values.isPermanent}
                            onChange={handleInputChange}
                        />       

                        <div>
                            <Controls.Button 
                                type="submit"
                                text="Submit"
                            />
                            <Controls.Button
                                text="Reset"
                                color="default"
                                onClick={resetForm}
                            />
                        </div>

                    </Grid>
                </Grid>
            </Form>
    )
}