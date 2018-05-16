import React from 'react'
import {observer} from 'mobx-react'
import {enableUniqueIds} from 'react-html-id'
import { typecheck } from "mobx-state-tree";
import LabelField from '../Elements/LabelField'
import {updateValue} from './utils/actions'
import validationProps from './utils/validationProps'
import { extractMessage } from "../validations/utils";

@observer
export default class BaseInput extends React.Component{
    
    constructor(props) {
        super(props);
        validationProps(props);
        enableUniqueIds(this);
        this.state={
            value : props.field  || '',
            message :''
        }
        this.validate = this.validate.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }
    
    updateValue=(newValue)=>{
        this.setState({value:newValue})
        const message = this.validate(newValue);
        this.setState({message});
        if( !message )
          this.props.update(newValue);
    }

    validate=(newValue)=>{
        try {
            typecheck(this.props.type, newValue);
            const {validations} = this.props
            let message='';
            for (var item in validations) {
                if(!validations[item].validator(newValue)){
                    message=validations[item].message;                
                    break;
                }
              }
            return message
        } catch (e) {
            return extractMessage(e.message)
        }
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
                    onChange={(e)=>this.setState({value: e.target.value})}
                    onBlur={(e)=>this.updateValue(e.target.value)}
                    className="text-field" 
                />      
                <span>{this.state.message}</span>      
                {/* <Error error={field.message}/> */}
            </div>
        );
    }
    
}