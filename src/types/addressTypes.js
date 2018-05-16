import validationFactory from './validationFactory';
import lengthValidations from './maxMinLength';
import digitsTypes from './digitsTypes';
import typesEnum from './typesEnum';
import languagesTypes from './languages';
import {types} from "mobx-state-tree";
    const minlength = lengthValidations.minlength({});
    const maxlength= lengthValidations.maxlength({num: 50});

    const urlValidation = validationFactory.generateRegexValidation(typesEnum.address.url);
    const url = types.union((snapshot) => urlValidation, maxlength, urlValidation);

    const emailValidation = validationFactory.generateRegexValidation(typesEnum.address.email);
    const email = types.union((snapshot) => emailValidation, maxlength, emailValidation);

    const houseNumberValidation = validationFactory.generateRegexValidation(typesEnum.address.houseNumber);
    const houseNumber = types.union((snapshot) => houseNumberValidation, 
                                                houseNumberValidation,  
                                                languagesTypes.noFinalLetters, 
                                                digitsTypes.startWithZero, 
                                                digitsTypes.startWithDigit, 
                                                digitsTypes.notZeroDigits);

export default{
    url,
    email,
    houseNumber
}