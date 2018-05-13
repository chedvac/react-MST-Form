import React, { Component } from 'react';
import Form from '../components/Form/Form';
import SimpleFieldsTab from './tabs/SimpleFieldsTab/SimpleFieldsTab';
import injectWrapper from '../core/inject'
import rootStore from './rootStore'
import Container from '../components/Container/Container'


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
                <Container >
                    <SimpleFields/>
                    <div className="row">
                        <div className="small-12 columns">
                            <button className="button" type="button" onClick={this.validateAll} >בדוק תקינות  </button>
                        </div>
                    </div>
                </Container>
            </Form>
        )
    }
};