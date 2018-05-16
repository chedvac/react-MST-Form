import validationFactory from './validationFactory';
import typesEnum from './typesEnum';
const hebrewName = validationFactory.generateRegexValidation(typesEnum.language.hebrewName);
const noFinalLetters = validationFactory.generateRegexValidation(typesEnum.language.noFinalLetters);

  export default {
    hebrewName,
    noFinalLetters
  }