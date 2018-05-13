import SimpleFieldsTab from './tabs/SimpleFieldsTab/store';
import { types } from "mobx-state-tree";

const RootStore = types.model({
    simpleFieldsTab:SimpleFieldsTab
})
export default  RootStore.create({
    simpleFieldsTab:{ 
        userDetails:{
            firstName:"",
            lastName:""
        }
    }
})