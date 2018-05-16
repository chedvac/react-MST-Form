import React, { Component } from 'react';
import Form from '../components/Form/Form';
import SimpleFieldsTab from './tabs/SimpleFieldsTab/SimpleFieldsTab';
import TablesTab from './tabs/tablesTab/tables';
import injectWrapper from '../core/inject';
import rootStore from './rootStore';
import TabSettings from '../components/navigation/TabSettings';
import TabsRouter from '../components/navigation/Router';
import Toolbar from '../components/toolbar/Toolbar';


export default class ComponentsDemo extends Component { // destruct non-valid props
    constructor(props){
        super(props)
        this.validateAll = this.validateAll.bind(this);
        this.validate = this.validate.bind(this);
    }

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
      SimpleFields = injectWrapper(SimpleFieldsTab, rootStore.simpleFieldsTab);
      Tables = injectWrapper(TablesTab, rootStore.tablesTab);
  
      tabs = [
          new TabSettings({number: '1',name: 'דוגמאות לשדות רגילים', path: '/SimpleFields' , component: this.SimpleFields}),
          new TabSettings({number: '2',name: 'טבלאות', path: '/Tables' , component: this.Tables})
      ]
    render() {
       
        return(
            <Form ref={c => { this.Form = c }}>
                <Toolbar />
                <TabsRouter routeSettings={this.tabs} />
                <div className="row">
                    <div className="small-12 columns">
                        <button className="button" type="button" onClick={this.validateAll} >בדוק תקינות  </button>
                    </div>
                </div>
            
            </Form>
        )
    }
};