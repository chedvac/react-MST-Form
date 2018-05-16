import regex from '../resources/regularExpressions';
import messages from '../resources/texts/messages';
import { types} from "mobx-state-tree";
export default{
    address: {
        url: {name: 'url', base: types.string, regex: regex.url, message: messages.address.hebrew.url},
        email: {name: 'email', base: types.string, regex: regex.email, message: messages.address.hebrew.email},
        houseNumber: {name: 'houseNumber', base: types.string, regex: regex.houseNumber, message: messages.address.hebrew.houseNumber}
    },
    general: {
    },
    language:{
        hebrewName: {name: 'hebrewName', base: types.string, regex: regex.noFinalLetters, message: messages.language.hebrew.hebrew},
        noFinalLetters: {name: 'noFinalLetters', base: types.string, regex: regex.noFinalLetters, message: messages.language.hebrew.noFinalLetters}
    },
    digits: {
        notZeroDigits: {name: 'notZeroDigits', base: types.string, regex: regex.notZeroDigits, message: messages.digits.hebrew.notZeroDigits},
        startWithZero: {name: 'startWithZero', base: types.string, regex: regex.startWithZero, message: messages.digits.hebrew.startWithZero},
        startWithDigit: {name: 'startWithDigit', base: types.string, regex: regex.startWithDigit, message: messages.digits.hebrew.startWithDigit}
    }
    
}