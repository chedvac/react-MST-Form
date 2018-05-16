
import React, { Component } from 'react';
import PropTypes from 'prop-types';



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
  this.validate = this.validate.bind(this);
  this.validateAll = this.validateAll.bind(this);
  
}
validate(children){
  React.Children.map(children,(child) => {
    const validateFn = child.props.validate
    if(validateFn){
      validateFn.call(child)
    }else{
      this.validate(child.props.children)
    }
  })
}
validateAll = ()=>{
  this.validate(this.props.children)
}
  render() {

    return (
      <form {...this.props} />
    )
  }
}
export default Form;
//export default form(Form);
