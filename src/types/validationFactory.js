import { types} from "mobx-state-tree"
import {constructMessage} from './../validations/utils'

function generateBasicValidation({name, base, validator, message}){
    message=constructMessage(message);
    return types.refinement(name, base, validator, s => message);      
};
function generateRegexValidation({name, base, regex, message}){
    const validator = v => v.toString().match(regex);
    message=constructMessage(message);
    return generateBasicValidation({name, base, validator, message});
};
export default {
    generateBasicValidation,
    generateRegexValidation
}