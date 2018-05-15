import React, { Component } from 'react';
import Form from '../components/Form/Form';
import SimpleFieldsTab from './tabs/SimpleFieldsTab/SimpleFieldsTab';
import injectWrapper from '../core/inject'
import rootStore from './rootStore'
import Wrapper from '../components/Wrapper/Wrapper'


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
            <Form ref={c => { this.Form = c }}>
                <Wrapper >
                    <SimpleFields/>
                    <div className="row">
                        <div className="small-12 columns">
                            <button className="button" type="button" onClick={this.validateAll} >בדוק תקינות  </button>
                        </div>
                    </div>
                </Wrapper>
            </Form>
        )
    }
};