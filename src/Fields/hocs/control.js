import React from 'react';
import {validationProps,validationValue} from '../utils/validationProps'
import {enableUniqueIds} from 'react-html-id'
import { typecheck } from "mobx-state-tree";
import { extractMessage } from "../../validations/utils";
import { getEventValue } from "../utils";

import '../CSS/control.css'

export default function control (WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
        super(props);
        validationProps(props);
        enableUniqueIds(this);
        this.state={
            value : props.field,
            message : ''
        }
        this.updateStore = this.updateStore.bind(this);
    }

    updateStore=(newValue)=>{
        try {
            typecheck(this.props.type, newValue);
            this.props.update(newValue);
        } catch (e) {
            this.props.update(undefined);
            const message= extractMessage(e.message);
            this.setState({message});
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.field!== undefined){
            const message = validationValue(prevState.value,nextProps.validations);
            return {message};
        }
        return null;
    }
     
    render() {
        return (
            <WrappedComponent {...this.props} {...this.state}
                    id={this.lastUniqueId()}
                    onChange={(e)=>this.setState({value: getEventValue(e)})}
                    onBlur={(e)=>this.updateStore(getEventValue(e))}
            />
        )
    }
  }
}
