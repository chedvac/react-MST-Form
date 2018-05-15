import React, { Component } from 'react';
import Form from '../components/Form/Form';
import SimpleFieldsTab from './tabs/SimpleFieldsTab/SimpleFieldsTab';
import TablesTab from './tabs/tablesTab/tables';
import injectWrapper from '../core/inject';
import rootStore from './rootStore';
import Container from '../components/Container/Container';
import TabSettings from '../components/navigation/TabSettings';
import TabsRouter from '../components/navigation/Router';
import Toolbar from '../components/toolbar/Toolbar';
export default class ComponentsDemo extends Component { // destruct non-valid props
    constructor(props){
        super(props)
        this.validateAll = this.validateAll.bind(this);
    }
    validateAll= function(){
        this.Form.validate();

    }
    SimpleFields = injectWrapper(SimpleFieldsTab, rootStore.simpleFieldsTab);
    Tables = injectWrapper(TablesTab, rootStore.tablesTab);

    tabs = [
        new TabSettings({number: '1',name: 'דוגמאות לשדות רגילים', path: '/SimpleFields' , component: this.SimpleFields}),
        new TabSettings({number: '2',name: 'טבלאות', path: '/Tables' , component: this.Tables})
    ]
    render() {

        return(
            <Form ref={c => { this.Form = c }}>
                
                <Container >
                    <Toolbar />
                    <TabsRouter routeSettings={this.tabs} />
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