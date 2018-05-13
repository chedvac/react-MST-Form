import { types } from "mobx-state-tree"
const PersonalInformation = types.model({
    firstName:  types.string,
    lastName:  types.string
   
}).actions(self=>({
    setFirstName(newValue){self.firstName = newValue},
    setLastName(newValue){self.lastName = newValue}
}))

export default PersonalInformation;
