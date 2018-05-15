import { types } from "mobx-state-tree"
const PersonalInformation = types.model({
    firstName:  types.string,
    lastName:  types.string,
    age: types.number
   
}).actions(self=>({
    setFirstName(newValue){self.firstName = newValue},
    setLastName(newValue){self.lastName = newValue},
    setAge(newValue){self.age = newValue}
}))

export default PersonalInformation;
