"use client";

import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import '../InfoTextField/InfoTextField.scss';

export default function BasicDateField({width,  ...props}:{width: string}) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateField']}>
                <DateField
                    {...props}
                    label="Дата зникнення"
                    className="customTextField centerLabel"
                    InputLabelProps={{className: 'auth-textfield__label'}}
                    InputProps={{className: 'auth-textfield__input', sx: { borderRadius: '10px' }}}
                    sx={{width: width, borderColor: 'rgb(189, 193, 195)'}}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}