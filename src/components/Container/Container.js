import React from 'react'
import {observer} from 'mobx-react'

@observer
export default class Container extends React.Component {
    constructor(props){
        super(props);
        //this.validate = this.validate.bind(this);
        this.jjj={}
    }
   
    render() {
        this.validate=()=>{
            //   this.props.children.map(child=>child.validate?child.validate():null) 
             React.Children.map(this.props.children, child=>child.validate?child.validate():null)
              
           }
      return <div>{this.props.children}</div>
    }
}
// export default function Container (WrappedComponent) {
//     WrappedComponent.validate=()=>{
//         this.
//     }
//     return class extends React.Component {
  
//       render() {
//         const props = this.context._getProps(this.id);
  
//         if (!props) {
//           return null;
//         }
  
//         return <WrappedComponent {...props} onChange={this.handleChange} onBlur={this.handleBlur} />
//       }
//     }
//   }
  
    
  
