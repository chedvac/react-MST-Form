import validationFactory from './validationFactory';
import typesEnum from './typesEnum';
import {types} from "mobx-state-tree";

    const notZeroDigits = validationFactory.generateRegexValidation(typesEnum.general.notZeroDigits);
    const noFinalLetters =  validationFactory.generateRegexValidation(typesEnum.general.noFinalLetters);
    const startWithDigit =  validationFactory.generateRegexValidation(typesEnum.general.startWithDigit);
    const startWithZero =  validationFactory.generateRegexValidation(typesEnum.general.startWithZero);

export default {
    notZeroDigits,
    startWithZero,
    noFinalLetters,
    startWithDigit
}