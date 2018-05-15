import React from 'react'
import {observer} from 'mobx-react'
import LabelField from '../Elements/LabelField'
import {updateValue} from './utils/actions'
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
            value : props.field || '',
            message :''
        }
        this.validate = this.validate.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }
    // componentDidMount(){
    //     this.setState({value:''});
    // }
    updateValue=(newValue)=>{
        this.setState({value:newValue})
        const message = this.validate(newValue);
        message? this.setState({message : message}):this.props.update(newValue)

    }

    validate=(newValue)=>{
        // 
        // try {
        //     typecheck(checkedType, value);
        //     const message = validations()
        //     return message
        //    
   
        // } catch (e) {
        //  this.setState({message : )});
        //  return extractMessage(e.message)
        // } 
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
                    onChange={(e)=>this.setState({value: e.target.value})}
                    onBlur={(e)=>this.updateValue(e.target.value)}
                    className="text-field" 
                />             
                <span error={this.state.message}></span>
            </div>
        );
    }
    
}