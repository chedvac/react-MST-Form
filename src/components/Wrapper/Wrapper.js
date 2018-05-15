
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const {
      children,
      className
    } = this.props;
    return (
      <div className={className}>{children}</div>
    );
  }
}

Wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Wrapper;

// import React from 'react'
// import {observer} from 'mobx-react'
// import createReactClass from 'create-react-class'
// import  validated from '../../validations/validated'

// export default class Container extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.validate = this.validate.bind(this);
       
    // }
    // validate=()=>{
    //     React.Children.map(this.props.children, child=>child.validate?child.validate():null)
    // }
    // render() {
      
    //   return <div>{this.props.children}</div>
    // }
// }
    
  
