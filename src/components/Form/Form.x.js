
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {form} from 'react-validation';
import ReactDOM from 'react-dom'
import  validated from '../../validations/validated'

@validated
class Form extends Component {
  // static propTypes = {
  //   getValues: PropTypes.func.isRequired,
  //   validate: PropTypes.func.isRequired,
  //   validateAll: PropTypes.func.isRequired,
  //   showError: PropTypes.func.isRequired,
  //   hideError: PropTypes.func.isRequired,
  // };
constructor(props){
  super(props);
  this.validateAll  = props.validateAll;
  this.validate = this.validate.bind(this);
  
}
validate=()=>{
  var func = function(item){
    const validateFn = item.type.validate//item.type.prototype.validate
    validateFn?validateFn(item):null
  }
  React.Children.map(this.props.children, func)
}
  render() {
    const { getValues, validate, validateAll, showError, hideError, ...props } = this.props;

    return (
      <form {...props} />
    )
  }
}
export default Form;
//export default form(Form);
