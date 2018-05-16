import {inject} from 'mobx-react';
const injectWrapper = function(wrappedObject, store = {}){
    return inject(
        stores => (
            {
                generalStore:{
                    formLanguage: stores.rootStore.formlanguage
                },
                store
        })
    )(wrappedObject);
};
export default injectWrapper;