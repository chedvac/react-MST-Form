
export const validationProps = props => {
    if ( !'field' in props /*|| !props.field.type==='BaseStoreValue'*/){
        throw new Error('Field should get a field parameter of BaseStoreValue type');
    }
}

export const validationValue=(newValue,validations)=>{
    let message='';
    for (var item in validations) {
        if(!validations[item].validator(newValue)){
            message=validations[item].message;                
            break;
        }
    }
    return message;   
}

