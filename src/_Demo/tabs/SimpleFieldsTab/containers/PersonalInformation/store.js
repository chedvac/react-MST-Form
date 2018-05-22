import { types } from "mobx-state-tree";
import languagesTypes from './../../../../../types/languages';
import numberTypes from './../../../../../types/numberTypes';
import primitiveTypes from './../../../../../types/primitiveTypes';

const PersonalInformation = types.model({
    firstName: types.union(types.undefined,languagesTypes.hebrewName ),
    lastName: types.union(types.undefined,languagesTypes.hebrewName),
    comments: types.union(types.undefined,types.string ),
    status: types.union(types.undefined,types.string),
    agreement: types.union(types.undefined,primitiveTypes.boolean),
    age: types.union(types.undefined,numberTypes.adult),
    fatherAge: types.union(types.undefined,numberTypes.adult)
}).actions(self=>({
    set_firstName(newValue)
    {
        self.firstName = newValue;
    },
    set_lastName(newValue)
    {
        self.lastName = newValue;
    },
    set_comments(newValue)
    {
        self.comments = newValue;
    },
    set_status(newValue)
    {
        self.status = newValue;
    },
    set_agreement(newValue)
    {
        self.agreement = newValue;
    },
    set_age(newValue)
    {
        self.age = newValue;
    },
    set_fatherAge(newValue)
    {
        self.fatherAge = newValue;
    }
}))

export default PersonalInformation;
