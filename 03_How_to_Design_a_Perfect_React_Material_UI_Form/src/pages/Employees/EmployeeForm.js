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
    
    // const [x, setX] = useState(5);
    // setX(6)
    // useEffect(() => {
    // }, [x]);

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFValues);

    return(
            <Form>
                <Grid container>
                    <Grid item xs={6}>
                        {/* <TextField 
                            variant="outlined"
                            label="Full Name"
                            name="fullName"
                            value={values.fullName}
                            onChange={handleInputChange}
                        /> */}

                        <Controls.Input 
                            name="fullName"
                            label="Name"
                            value={values.fullName}
                            onChange={handleInputChange}
                        />

                        <Controls.Input 
                            label="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                        />

                        <Controls.Input 
                            label="Mobile"
                            name="mobile"
                            values={values.mobile}
                            onChange={handleInputChange}
                        />

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
                            />
                        </div>

                    </Grid>
                </Grid>
            </Form>
    )
}