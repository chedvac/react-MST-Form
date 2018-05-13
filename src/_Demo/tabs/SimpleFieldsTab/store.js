import { types } from "mobx-state-tree"
import PersonalInformation from "./containers/PersonalInformation/store";
const SimpleFieldsTab = types.model({
    userDetails:  PersonalInformation
}).actions(self=>({
    
}))
export default SimpleFieldsTab;


