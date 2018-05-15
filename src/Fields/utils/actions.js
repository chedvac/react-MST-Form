export const  updateValue = (newValue,field) => {
    field.updateValue(newValue)
}

export const parseValToType=(type,val)=>{
    switch(type.name){
        case "number": return Number(val);
    }
}