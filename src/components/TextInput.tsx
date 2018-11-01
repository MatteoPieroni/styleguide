//---------------------------------------------------------------------------------------
// Name        : TextInput
// Type        : Class
// Author      : Sharon Jefferson-Tetteh
// History	   : 26th Jan 2017
// Description : Encapsulates front end functionality for text boxes including the display
//               of validation messages
// Copyright   : This is the property of Abel & Cole Limited and cannot be used, 
//               copied or modified without the express permission of the company
//               in writing. Copyright 2017 Abel & Cole Limited.
//---------------------------------------------------------------------------------------
import * as React from 'react';
import InputError from './InputError';

export interface Props {
    wrapperClassName?: string;
    placeholder: string;
    onBlur?: () => void;
    onChange?: () => void;
    value: string;
    type: string;
    name: string;
    errorMessage?: string;
}

class TextInput extends React.Component<Props, object> {

    //-------------------------------------------------------------------------------
    // Constructor : TextInput
    // Description : Initialises the state of the textbox.
    //-------------------------------------------------------------------------------
    constructor(props: Props) {
        super(props);
    }
 
    //-------------------------------------------------------------------------------
    // Method       : render
    // Description  : Method to display the textbox and corresponding validation
    //                message if required.
    //-------------------------------------------------------------------------------
    render() {

        return (

              <div className={this.props.wrapperClassName}>

                  <input
                      placeholder={this.props.placeholder}
                      onBlur={this.props.onBlur}
                      onChange={this.props.onChange}
                      value={this.props.value}
                      type={this.props.type}
                      name={this.props.name} />

                  <InputError 
                      visible={this.props.errorMessage}
                      errorMessage={this.props.errorMessage}
                      className="field-validation-error" />
            </div>
        );
    }
}

export default TextInput;