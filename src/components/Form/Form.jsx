import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './input';
// import TextArea from './textarea';
// import Dropdown from './dropdown';
// import SubmitButton from './submit-button';
// import ResetButton from './reset-button';
import Wrapper from './wrapper';
// import CustomInput from './custom-input';
// import CustomResetButton from './custom-reset-button';
// import CustomSubmitButton from './custom-submit-button';
//import InputBaseComponent from './inputBaseComponent';

import {
  getInitialState,
  getStateOnBackendErrors,
  getStateOnResetForm,
  getStateWithNewInputValues,
  getInputsValues
} from './form';

class Form extends Component {
  constructor(props) {
    super(props);

  }



  // validate() {
  //   const amountOfInvalidFields = Object.keys({ ...this.state.inputs }).filter(
  //     (key) => !this.state.inputs[key].valid
  //   ).length;

  //   const inputs = { ...this.state.inputs };
  //   //check if all the inputs are valid
  //   if (!amountOfInvalidFields) {
  //     // proceed to call the onSubmit prop from the Form.
  //     this.props.onSubmit({ ...getInputsValues(inputs) });
  //   } else {
  //     this.setInputsValues({ dirty: true });
  //     this.setState({ forceDirty: true });
  //   }
  // }



  getInputsCommonProps(props) {
    const { name, validate, onChange, onBlur } = props;
   
    return {
      name,
      onChange: (value) => {
        // this.setState({value:newValue})
        // const message = this.validate(newValue);
        // message? this.setState({message : message}):this.props.action(newValue)
        console.log('based onchange!', value)
        if (onChange) {
          onChange(value);
        }
      },
      onBlur: (value) => {
        console.log('based onBlur!', value)
        if (onBlur) {
          onBlur(value);
        }
      },
      validate: (value, extra = {}) => {
         // 
        // try {
        //     typecheck(checkedType, value);
        //     const message = validate()
        //     return message
        //    
   
        // } catch (e) {
        //  this.setState({message : )});
        //  return extractMessage(e.message)
        // } 
        console.log('validate', value)
        return ''; 
        // if (validate) {
        //   const validateObj = validate(value, extra);
        //   this.setInputsValues({
        //     valid: validateObj.valid,
        //     errorMessage: validateObj.errorMessage,
        //     dirty: true
        //   }, input);
        // } else {
        //   this.setInputsValues({
        //     valid: true,
        //     errorMessage: '',
        //     dirty: true
        //   }, input);
        // }
      },
      // valueWasResetted: () => {
      //   this.setInputsValues({ resetValue: false }, input);
      // }
    };
  }

  getChildrenComponents(children) {
    return React.Children.map(children,
      (child) => {
        let component = child;
        const displayName = child.props ? child.type.displayName : '';
        switch (displayName) {
          case 'Wrapper':
            component = (
              <Wrapper {...child.props}>
                {this.getChildrenComponents(child.props.children)}
              </Wrapper>
            );
            break;
          case 'TextArea':
          case 'Input':
          case 'DropdownWrapper':
            component = React.cloneElement(child, this.getInputsCommonProps(child.props));
            break;
          case 'CustomInput':
            const customInput = child.props.children;
            component = React.cloneElement(customInput, this.getInputsCommonProps(customInput.props));
            break;
          case 'CustomSubmitButton':
            const customSubmitButton = child.props.children.props
              ? child.props.children : (<span>{child.props.children}</span>);
            component = React.cloneElement(customSubmitButton, this.getSubmitButtonProps(child.props));
            break;
          case 'CustomResetButton':
            const customResetButton = child.props.children.props
              ? child.props.children : (<span>{child.props.children}</span>);
            component = React.cloneElement(customResetButton, this.getResetButtonProps(child.props));
            break;
        }
        return component;
      }
    );
  }

  render() {
    return (
      <form
        action='/'
        className={this.props.className}
        // onSubmit={(evt) => {
        //   evt.preventDefault();
        //   this.submitForm();
        // }}
      >
        {this.getChildrenComponents(this.props.children)}
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  resetForm: PropTypes.bool,
  clearValuesOnReset: PropTypes.bool,
  formWasReset: PropTypes.func,
  //onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func,
  disableInputs: PropTypes.bool,
  serverErrors: PropTypes.shape({})
};

// Form.CustomInput = CustomInput;
// Form.CustomInput.displayName = 'CustomInput';

Form.Input = Input;
Form.Input.displayName = 'Input';

// Form.TextArea = TextArea;
// Form.TextArea.displayName = 'TextArea';

// Form.Dropdown = Dropdown;
// Form.Dropdown.displayName = 'DropdownWrapper';

// Form.SubmitButton = SubmitButton;
// Form.SubmitButton.displayName = 'SubmitButton';

// Form.ResetButton = ResetButton;
// Form.ResetButton.displayName = 'ResetButton';

// Form.CustomSubmitButton = CustomSubmitButton;
// Form.CustomSubmitButton.displayName = 'CustomSubmitButton';

// Form.CustomResetButton = CustomResetButton;
// Form.CustomResetButton.displayName = 'CustomResetButton';

Form.Wrapper = Wrapper;
Form.Wrapper.displayName = 'Wrapper';

//export { InputBaseComponent };

export default Form;
