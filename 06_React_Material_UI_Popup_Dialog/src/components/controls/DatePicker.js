import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function DatePicker(props){

    const { name, label, value, onChange } = props;

    //convert to Default Event Parameter function
    //use this code so that the datepicker will function
    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    });

    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" 
                inputVariant="outlined" 
                label={label} 
                formate="MMM/dd/yyyy"
                name={name}
                value={value}
                onChange={date => onChange(convertToDefEventPara(name, date))}

            />
        </MuiPickersUtilsProvider>
    )
}