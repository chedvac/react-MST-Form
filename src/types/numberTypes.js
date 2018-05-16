import validationFactory from './validationFactory';
import primitiveTypes from './primitiveTypes';

const adult = validationFactory.generateBasicValidation({name: 'adult',base: primitiveTypes.number, validator: value => value > 18, message: 'must be over 18'});

export default {
    adult
  }