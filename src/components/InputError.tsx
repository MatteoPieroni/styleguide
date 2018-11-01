//---------------------------------------------------------------------------------------
// Name        : InputError
// Type        : Class
// Author      : Sharon Jefferson-Tetteh
// History	   : 27th Jan 2017
// Description : Encapsulates front end functionality for the input validation 
//               messages
// Copyright   : This is the property of Abel & Cole Limited and cannot be used, 
//               copied or modified without the express permission of the company
//               in writing. Copyright 2017 Abel & Cole Limited.
//---------------------------------------------------------------------------------------
import * as React from 'react';

export interface Props {
    className?: string;
    visible?: string;
    errorMessage?: string;
}

class InputError extends React.Component<Props, object> {

    //-------------------------------------------------------------------------------
    // Method       : render
    // Description  : Method to display the validation error messages if the
    //                required property is set to true
    //-------------------------------------------------------------------------------
    render() { 
        var errorClass = (this.props.className) ? this.props.className : '';

        if (!this.props.visible)
            errorClass += " hide";

        return (
          <span className={'error--input' + errorClass}>
            {this.props.errorMessage}
          </span>
        )
    }
}

export default InputError;