import { types} from "mobx-state-tree"
function generateBasicValidation({name, base, validator, message}){
    return types.refinement(name, base, validator, s => message);      
};
function generateRegexValidation({name, base, regex, message}){
    const validator = v => v.toString().match(regex);
    return generateBasicValidation({name, base, validator, message});
};
export default {
    generateBasicValidation,
    generateRegexValidation
}