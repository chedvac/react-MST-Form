
import {messages} from '../resources/texts/number'
import {stringExtensionFormat} from './utils'

export const greaterThan =(params)=> {
    return (val)=>{
        let {number, message} = params;
        if (!number ||isNaN(number.toString())) {
            return "";
        }
        number = parseFloat(number);
        val = parseFloat(val);
        if (isNaN(val)) {
            return "";
        }
        return val > number ? "" : message || stringExtensionFormat(messages.greaterThan,number);
    }
}

export const lessThan = params => {
    return (val)=>{ //ko.validation.utils.isEmptyVal(number) ||
        let {number, message} = params;
        if (isNaN(number.toString())) {
            return true;
        }
        number = parseFloat(number);
        val = parseFloat(val);
        if (isNaN(val)) {
            return true;
        }
        return val < number ? "": message || messages.lessThan;
    }
}

export const differentThan =(params)=> {
    return (val)=>{
        return val !== params.number ? "" : params.message || "differentThan"
    }
}

/*
export const greaterThan =(params)=> { 
    return {
        validator: (val)=>{//ko.validation.utils.isEmptyVal(number) ||
            if (isNaN(params.number.toString())) {
                return true;
            }
            params.number = parseFloat(params.number);
            val = parseFloat(val);
            if (isNaN(val)) {
                return true;
            }
            return val > params.number;
        },
        message: params.message || messages.greaterThan
    }
}
*/

/*
export const differentThan =(params)=> {
    return{
        validator: (val)=>{//ko.validation.utils.isEmptyVal(number) ||
            /*if (isNaN(number.toString())) {
                return true;
            }
            number = parseFloat(number);
            val = parseFloat(val);
            if (isNaN(val)) {
                return true;
            }*//*
            return val !== params.number;
        },
        message: params.message || "differentThan"
}
}
*/
