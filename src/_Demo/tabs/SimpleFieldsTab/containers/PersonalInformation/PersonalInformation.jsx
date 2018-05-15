import React from 'react'
import {observer} from 'mobx-react'
import BaseInput from '../../../../../Fields/BaseInput';
import BaseTextarea from '../../../../../Fields/BaseTextarea';
import BaseSelect from '../../../../../Fields/BaseSelect';
import BaseCheckbox from '../../../../../Fields/BaseCheckbox';
import injectWrapper from '../../../../../core/inject'
import Wraper from '../../../../../components/Wraper/Wraper'
@observer
export default class PersonalInformation extends React.Component{
    
    constructor(props) {
        super(props);
         this.state={
             firstName : props.firstName,
             lastName : props.lastName
         }      
        this.texts = {
            hebrew: {
                firstName: ' שם פרטי',
                lastName: ' שם משפחה'
            },
            english: {
                firstName: 'first name',
                lastName:'last name'
            },
            arabic: {
                firstName: 'first name',
                lastName:'last name'
            }
        }
        this.currentResources = this.currentResources.bind(this);
        this.statusOptions=[{key:'1',value:'נשוי'},{key:'2',value:'רווק'},{key:'3',value:'גרוש'}]

    }
    currentResources = function(){
        return this.texts['hebrew'/*this.props.formLanguage.name*/];
    };
    actions={...this.props.actions}
        
   
    validate(){

    }
    render(){
        const FirstName = injectWrapper(BaseInput,{
            field: this.props.firstName
        });
        const LastName = injectWrapper(BaseInput,{
            field: this.props.lastName
        });
        // const Comments = injectWrapper(BaseTextarea,{
        //     field: this.props.comments
        // }); 
       
        // const Status = injectWrapper(BaseSelect,{
        //     field: this.props.status
        // }); 
        // const Agreement = injectWrapper(BaseCheckbox,{
        //     field: this.props.agreement
        // });
       
        return(
            <Wraper>
               
            <div className="row">
            
                <div className="col-md-4">
                    <FirstName action={this.actions.setFirstName} label={this.currentResources().firstName}/>
                </div>
                <div className="col-md-4">
                    <LastName action={this.actions.setLastName} label={this.currentResources().lastName}/>
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
            </Wraper>
           
        );
    }
}