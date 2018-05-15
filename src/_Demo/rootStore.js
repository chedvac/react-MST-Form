import SimpleFieldsTab from './tabs/SimpleFieldsTab/store';
import tablesTab from './tabs/tablesTab/store';
import languageStore from '../components/language/store'
import { types } from "mobx-state-tree";

const RootStore = types.model({
    simpleFieldsTab:SimpleFieldsTab,
    tablesTab:tablesTab,
    formlanguage: languageStore

})
export default  RootStore.create({
    simpleFieldsTab:{ 
        userDetails:{
            firstName:undefined,
            lastName:undefined
        }
    },
    tablesTab:{ 
        email:undefined,
        houseNumber:undefined      
    },
    formlanguage: {name: 'hebrew'}
})