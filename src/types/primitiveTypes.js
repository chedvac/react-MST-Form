
import {types} from "mobx-state-tree";
import {constructMessage} from './../validations/utils'
import messages from './../resources/texts/messages'
 
function validateNumber(value) {
    const input = Number(value);
    return !isNaN(input);
}

const number = types.custom({
    name: "number",
    fromSnapshot(value) {
      return value;
    },
    toSnapshot(value) {
      return Number(value);
    },
    isTargetType(value) {
      return validateNumber(value);
    },
    getValidationMessage(value) {
      return constructMessage(messages.number.hebrew.number);
    }
  });
 
  function validateBoolean(value) {
    return value === "true" || value === "false";
  }

  const boolean = types.custom({
    name: "boolean",
    fromSnapshot(value) {
      return value;
    },
    toSnapshot(value) {
      return JSON.parse(value);
    },
    isTargetType(value) {
      return validateBoolean(value);
    },
    getValidationMessage(value) {
      return constructMessage("עליך להזין ערך בוליאני בלבד");
    }
  });

  export default {
    number
  }