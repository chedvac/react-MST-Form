import React from 'react'
import {observer} from 'mobx-react'
import PersonalInformation from './containers/PersonalInformation/PersonalInformation'
import injectWrapper from '../../../core/inject'
import control from '../../../Fields/hocs/control'
@observer
 class SimpleFieldsTab extends React.Component{
    
    constructor(props) {
        super(props);

    }
  
    render(){
        
        return(
            <PersonalInformation {...this.props.userDetails} ref='PersonalInformation'/>
           
        );
    }
}
export default SimpleFieldsTab