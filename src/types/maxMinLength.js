import validationFactory from './validationFactory';
import { types} from "mobx-state-tree";
function  maxlength({baseType = types.string, num = 5, message = '5יש להזין ערך קטן מ'} ){
    const maxlengthValidation = value => value.length <= num;
    return validationFactory.generateBasicValidation({name: 'maxlength', base: baseType, validator: maxlengthValidation, message: message})
}
function  minlength({baseType = types.string, num = 1, message = 'יש להזין ערך גדול מ1'}){
    const maxlengthValidation = value => value.length >= num;
    return validationFactory.generateBasicValidation({name: 'minlength', base: baseType, validator: maxlengthValidation, message: message})
}
export default{
    maxlength,
    minlength
}