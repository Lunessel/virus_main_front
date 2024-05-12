import React from 'react';
import "./InfoTextField.scss";
import {TextField} from "@mui/material";

const InfoTextField= ({text, width, ...props}:{text: string, width: string}) => {
    return (
        <TextField
            {...props}
            className={'customTextField'}
            label={text}
            variant="outlined"
            InputLabelProps={{className: "auth-textfield__label"}}
            InputProps={{className: "auth-textfield__input", sx: { borderRadius: '10px' }}}
            sx={{width: width, borderColor: 'rgb(189, 193, 195)'}}
            autoComplete={'off'}
        />
    );
};

export default InfoTextField;