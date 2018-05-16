import React, { Component } from 'react';
import Form from '../components/Form/Form';
import SimpleFieldsTab from './tabs/SimpleFieldsTab/SimpleFieldsTab';
import injectWrapper from '../core/inject'
import rootStore from './rootStore'


export default class ComponentsDemo extends Component { // destruct non-valid props
    constructor(props){
        super(props)
        this.validateAll = this.validateAll.bind(this);
        this.validate = this.validate.bind(this);
    }
    // validateAll= function(){
    //     this.Form.validateAll();

    // }
    validate(refs){
       // React.Children.map(children,(child) => {
        for (var ref in refs) {
           
        const child = refs[ref];
          const validateFn = child.validate
          if(validateFn){
            validateFn.call(child)
          }else{
            this.validate(child.refs)
          }
        }
      }
      validateAll = ()=>{
        this.validate(this.refs)
      }
    
    render() {
       
        return(
            <Form ref={c => { this.Form = c }}>
            <div>
                <SimpleFieldsTab {...rootStore.simpleFieldsTab} ref='SimpleFieldsTab' />
                <div className="row">
                    <div className="small-12 columns">
                        <button className="button" type="button" onClick={this.validateAll} >בדוק תקינות  </button>
                    </div>
                </div>
            </div>
            </Form>
        )
    }
};