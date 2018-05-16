import React from 'react'
import {observer} from 'mobx-react'
import {getChildType} from 'mobx-state-tree'
import BaseInput from '../../../../../Fields/BaseInput';
import Container from '../../../../../components/Container/Container'
import {lessThan, differentThan} from '../../../../../validations/number'
@observer
export default class PersonalInformation extends React.Component{
    
    constructor(props) {
        super(props);
         this.state={
             firstName : '',
             lastName : ''
         }      
        this.texts = {
            hebrew: {
                firstName: ' שם פרטי',
                lastName: ' שם משפחה',
                age:'גיל'
            },
            english: {
                firstName: 'first name',
                lastName:'last name',
                age:'age'
            },
            arabic: {
                firstName: 'first name',
                lastName:'last name',
                age:'age'
            }
        }
        this.currentResources = this.currentResources.bind(this);
        this.statusOptions=[{key:'1',value:'נשוי'},{key:'2',value:'רווק'},{key:'3',value:'גרוש'}]
        this.validations ={
            age: {
                lessThan: lessThan({number:30}),
                differentThan: differentThan({number:22})
            }
        }    
    }
    currentResources = function(){
        return this.texts[this.props.generalStore.formLanguage.name];
    };        
   
    validate(){

    }
    render(){       
        return(
            <Container>
               
            <div className="row">
            
                <div className="col-md-4">
                    <BaseInput field={this.props.store.firstName} update={this.props.store.updateFirstName}
                        label={this.currentResources().firstName} type={getChildType(this.props.store, "firstName")}/>
                </div>
                <div className="col-md-4">
                    <BaseInput field={this.props.store.lastName} update={this.props.store.updateLastName}
                        label={this.currentResources().lastName} type={getChildType(this.props.store, "lastName")}/>
                </div> 
                <div className="col-md-4">
                    <BaseInput field={this.props.store.age} update={this.props.store.updateAge}
                        label={this.currentResources().age} type={getChildType(this.props.store, "age")}
                        validations={this.validations.age}/>
                </div> 
                {/* <div className="col-md-4">
                    <Comments label='comments'  rows={3} isAutoResize={false}/>
                </div> 
                 
                <div className="col-md-4">
                    <Status label='status' options={this.statusOptions} />
                </div>  
                 
                 <div className="col-md-4">
                    <Agreement label='I agree' />
                </div>       */}
                </div>
            </Container>
           
        );
    }
}