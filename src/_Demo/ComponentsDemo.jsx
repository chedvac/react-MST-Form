import React, { Component } from 'react';
import Form from '../components/Form/Form';
import SimpleFieldsTab from './tabs/SimpleFieldsTab/SimpleFieldsTab';
import injectWrapper from '../core/inject'
import rootStore from './rootStore'
import Wrapper from '../components/Wrapper/Wrapper'
import Form  from '../../src/form';


export default class ComponentsDemo extends Component { // destruct non-valid props
    constructor(props){
        super(props)
        this.validateAll = this.validateAll.bind(this);
    }
    validateAll= function(){
        this.Form.validate();

    }
    
    render() {
        const SimpleFields = injectWrapper(SimpleFieldsTab,{...rootStore.simpleFieldsTab})
        return(
            <Form ref={c => { this.Form = c }}
            resetForm={this.state.resetForm}
            formWasReset={() => this.setState({ resetForm: false })}
            onSubmit={(formData) => this._onSubmit(formData)}
            onReset={() => this._onReset()}
            disableInputs={this.state.disableInputs}
          >
            <h2>Basic Form</h2>
            <Form.Wrapper className={styles.wrapper}>
              <h3>Group 1</h3>
              <Form.Input
                name='name'
                placeHolder='Type your name here...'
                serverValue={this.state.defaultValue}
                type='text'
                label='Name * (this field will will start beeing validated from the moment you start typing)'
                startValidatingWhenIsPristine
                onBlur={(value) => console.log(`On Blur value: ${value}`)}
                validate={(value) => {
                  let valid = true;
                  let errorMessage = '';
                  if (!value.length) {
                    valid = false;
                    errorMessage = 'This field is required';
                  } else if (!isAlpha(value.replace(/\s/g, ''))) {
                    valid = false;
                    errorMessage = 'You must enter only characters';
                  }
                  return { valid, errorMessage };
                }}
                fieldClassName={styles.inputField}
              />
               {/* <SimpleFields/> */}
               <div className="row">
                        <div className="small-12 columns">
                            <button className="button" type="button" onClick={this.validateAll} >בדוק תקינות  </button>
                        </div>
                    </div>
            </Form.Wrapper>
        </Form>
                
            
        )
    }
};