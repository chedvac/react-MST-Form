
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {form} from 'react-validation';


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
    // ReactDOM.findDOMNode(component)
    // var myChild = React.renderComponent(item.type);
   // myChild.validate?myChild.validate():null
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
