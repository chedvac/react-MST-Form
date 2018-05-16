import React from 'react'
import {observer} from 'mobx-react'
import Input from '../../../../../Fields/Input';
import Textarea from '../../../../../Fields/Textarea';
import Select from '../../../../../Fields/Select';
import Checkbox from '../../../../../Fields/Checkbox';
import injectWrapper from '../../../../../core/inject'
import control from '../../../../../Fields/hocs/control'
@observer
 class PersonalInformation extends React.Component{
    
    constructor(props) {
        super(props);
        //  this.state={
        //      firstName : props.firstName,
        //      lastName : props.lastName
        //  }      
        this.texts = {
            hebrew: {
                firstName: ' שם פרטי',
                lastName: ' שם משפחה',
                comments: 'הערות',
                status: 'מצב משפחתי',
                agreement:'אני מצהיר...'
            },
            english: {
                firstName: 'first name',
                lastName:'last name',
                comments: 'comments',
                status: 'status',
                agreement:'I Agree...'
            },
            arabic: {
                firstName: 'first name',
                lastName:'last name',
                comments: 'comments',
                status: 'status',
                agreement:'I Agree...'
            }
        }
        this.currentResources = this.currentResources.bind(this);
        this.statusOptions=[{key:'1',value:'נשוי'},{key:'2',value:'רווק'},{key:'3',value:'גרוש'}]

    }
    currentResources = function(){
        return this.texts['hebrew'/*this.props.formLanguage.name*/];
    };
    actions={...this.props.actions}
   
    render(){
      
        return(
            <div> 
                <div className="row">
                
                    <div className="col-md-4">
                        <Input ref='firsName' field= {this.props.firstName}  update={this.actions.setFirstName} label={this.currentResources().firstName}/>
                    </div>
                    <div className="col-md-4">
                        <Input ref='lastName' field= {this.props.lastName} update={this.actions.setLastName} label={this.currentResources().lastName}/>
                    </div> 
                    <div className="col-md-4">
                        <Textarea field= {this.props.comments} update={this.actions.updateComments} label={this.currentResources().comments} rows={4} isAutoResize={false}/>
                    </div> 
                    
                    <div className="col-md-4">
                        <Select field= {this.props.status} label={this.currentResources().status} update={this.actions.setStatus} options={this.statusOptions} />
                    </div>  
                    
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Checkbox label={this.currentResources().agreement} update={this.actions.setAgreement} field= {this.props.agreement}/>
                    </div>     
                </div>
            </div>
           
        );
    }
}
export default PersonalInformation
//export default control(PersonalInformation)