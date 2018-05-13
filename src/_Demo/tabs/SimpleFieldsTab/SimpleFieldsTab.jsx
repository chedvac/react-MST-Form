import React from 'react'
import {observer} from 'mobx-react'
import Container from '../../../components/Container/Container'
import PersonalInformation from './containers/PersonalInformation/PersonalInformation'
import injectWrapper from '../../../core/inject'

@observer
export default class SimpleFieldsTab extends React.Component{
    
    constructor(props) {
        super(props);

    }
  
    render(){
        const UserDetails = injectWrapper(PersonalInformation,{...this.props.userDetails})
        
        return(
            <Container >
                <UserDetails/>
            </Container>
           
        );
    }
}