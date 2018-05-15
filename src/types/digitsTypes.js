import validationFactory from './validationFactory';
import typesEnum from './typesEnum';
import {types} from "mobx-state-tree";

    const notZeroDigits = validationFactory.generateRegexValidation(typesEnum.digits.notZeroDigits);
    const startWithDigit = validationFactory.generateRegexValidation(typesEnum.digits.startWithDigit);
    const startWithZero = validationFactory.generateRegexValidation(typesEnum.digits.startWithZero);

export default {
    notZeroDigits,
    startWithZero,
    startWithDigit
}