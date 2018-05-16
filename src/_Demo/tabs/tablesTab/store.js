import { types } from "mobx-state-tree";
import addressValidation from './../../../types/addressTypes';

const tablesTab = types.model({
    email: types.union(types.undefined, addressValidation.email),
    houseNumber: types.union(types.undefined, addressValidation.houseNumber)
})
.actions(self => ({
    updateEmail(newValue) {
        self.email = newValue
    },
    updateHouseNumber(newValue) {
        self.houseNumber = newValue
    }

  }))   
export default tablesTab;


