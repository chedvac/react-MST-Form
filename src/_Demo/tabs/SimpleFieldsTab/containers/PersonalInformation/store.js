import { types } from "mobx-state-tree";
import languagesTypes from './../../../../../types/languages';
import numberTypes from './../../../../../types/numberTypes';
import primitiveTypes from './../../../../../types/primitiveTypes';

const PersonalInformation = types.model({
    firstName: types.union(types.undefined,languagesTypes.hebrewName ),
    lastName: types.union(types.undefined,languagesTypes.hebrewName),
    comments: types.union(types.undefined,types.string ),
    status: types.union(types.undefined,types.string),
    //agreement: types.union(types.undefined,primitiveTypes.boolean),
    agreement: types.union(types.undefined,types.string),
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
    updateComments(newValue)
    {
        self.comments = newValue;
    },
    updateStatus(newValue)
    {
        self.status = newValue;
    },
    updateAgreement(newValue)
    {
        self.agreement = newValue;
    },
    updateAge(newValue)
    {
        self.age = newValue;
    }
}))

export default PersonalInformation;
