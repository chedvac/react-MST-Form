
import messages from '../resources/texts/messages'
import {stringExtensionFormat} from './utils'

export const greaterThan =(params)=> {
    let {number, message} = params;
    return {
        validator: (val)=>{
            if (!number ||isNaN(number.toString())) {
                return true;
            }
            number = parseFloat(number);
            val = parseFloat(val);
            if (isNaN(val)) {
                return true;
            }
            return val > number;
        },
        message: message || stringExtensionFormat(messages.number.hebrew.greaterThan,number)
    }
}

export const lessThan = params => {
    let {number, message} = params;
    return{
        validator: (val)=>{
            if (!number ||isNaN(number.toString())) {
                return true;
            }
            number = parseFloat(number);
            val = parseFloat(val);
            if (isNaN(val)) {
                return true;
            }
            return val < number;
        },
        message: message || stringExtensionFormat(messages.number.hebrew.lessThan,number)
    }
};

export const differentThan =(params)=> {
    let {number, message} = params;
    return{
        validator: (val)=>{
            if (!number ||isNaN(number.toString())) {
                return true;
            }
            number = parseFloat(number);
            val = parseFloat(val);
            if (isNaN(val)) {
                return true;
            }
            return val !== number;
        },
        message: message || stringExtensionFormat("nust to different Than {0}",number)
    }
};