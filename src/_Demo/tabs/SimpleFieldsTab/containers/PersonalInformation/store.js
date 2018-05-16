import { types } from "mobx-state-tree";
import languagesTypes from './../../../../../types/languages';
import numberTypes from './../../../../../types/numberTypes';

const PersonalInformation = types.model({
    firstName: types.union(types.undefined,languagesTypes.hebrewName ),
    lastName: types.union(types.undefined,languagesTypes.hebrewName),
    age: types.union(types.undefined,numberTypes.adult ),
}).actions(self=>({
    updateFirstName(newValue)
    {
        self.firstName = newValue;
    },
    updateLastName(newValue)
    {
        self.lastName = newValue;
    },
    updateAge(newValue)
    {
        self.age = newValue;
    }
}))

export default PersonalInformation;
