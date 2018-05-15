import React from 'react'
import {observer} from 'mobx-react'
import {getType, types} from "mobx-state-tree"
import LabelField from '../Elements/LabelField'
import {updateValue,parseValToType} from './utils/actions'
import validationProps from './utils/validationProps'
import {enableUniqueIds} from 'react-html-id'
import { typecheck } from "mobx-state-tree";
import { extractMessage } from "../validations/utils";

@observer
export default class BaseInput extends React.Component{
    
    constructor(props) {
        super(props);
        validationProps(props);
        enableUniqueIds(this);
        this.state={
            value : props.field,
            message :''
        }
        this.validate = this.validate.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }
    
    updateValue=(newValue)=>{
        newValue=parseValToType(types.number,newValue)
        this.setState({value:newValue})
        const message = this.validate(newValue);
        this.setState({message});
        //if( !message )
        //  this.props.action(newValue) 
    }

    validate=(newValue)=>{
        try {
            //newValue= parseValToType()
            //console.log(getType(this.props.field));
            typecheck(types.number, newValue);
            const message = this.props.validations.map(item=>item(newValue)).find(item=> item !== "" );
            return message
        } catch (e) {
            this.setState({message : "aaa"});
            return extractMessage(e.message)
        } 
        console.log('validate', newValue)
        return '';      
    } 
    render(){
        const {  field, label,action,validations, isRequired} = this.props || {};
        return(
            <div>
                <LabelField label={label} isRequired={true} htmlFor={this.nextUniqueId()}/>
                <input
                    id={this.lastUniqueId()}
                    value={this.state.value}
                    onChange={(e)=>this.updateValue(e.target.value)}
                    className="text-field" 
                /> 
                <span>{this.state.message}</span>      
                {/* <Error error={field.message}/> */}
            </div>
        );
    }
    
}