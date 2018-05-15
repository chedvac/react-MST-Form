import { types } from "mobx-state-tree";
import languagesTypes from './../../../../../types/languages';

const PersonalInformation = types.model({
    firstName: types.union(types.undefined, languagesTypes.hebrewName),
    lastName: types.union(types.undefined, languagesTypes.hebrewName),
   
}).actions(self=>({
    updateFirstName(newValue)
    {
        self.firstName = newValue;
    },
    updateLastName(newValue)
    {
        self.lastName = newValue;
    }
}))

export default PersonalInformation;
