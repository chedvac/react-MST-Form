import React from 'react'
import {observer} from 'mobx-react'
import BaseInput from '../../../Fields/BaseInput';
import injectWrapper from '../../../core/inject';
import Container from '../../../components/Container/Container';
@observer
export default class Tables extends React.Component{
    
    constructor(props) {
        super(props);
         this.state={
             email : props.store.firstName,
             houseNumber : props.store.houseNumber
         }      
        this.texts = {
            hebrew: {
                email: ' מייל',
                houseNumber: ' מספר בית'
            },
            english: {
                email: 'first name',
                houseNumber:'last name'
            },
            arabic: {
                email: 'first name',
                houseNumber:'last name'
            }
        }
        this.currentResources = this.currentResources.bind(this);
    }
    currentResources = function(){
        return this.texts[this.props.generalStore.formLanguage.name];
    };        
   
    validate(){

    }
    render(){
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
            <Container>
               
            <div className="row">
            
                <div className="col-md-4">
                    <BaseInput field={this.props.store.email} update={this.props.store.updateEmail}
                        label={this.currentResources().email}/>
                </div>
                <div className="col-md-4">
                    <BaseInput  field={this.props.store.houseNumber} update={this.props.store.updateHouseNumber}
                         label={this.currentResources().houseNumber}/>
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