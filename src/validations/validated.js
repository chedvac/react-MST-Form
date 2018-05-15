
import React from 'react'
export default function validated(target) {
    const validate=(element)=>{
        var func = function(item){
          const validateFn = item.type.prototype.validate
          validateFn?validateFn.call(item):null
        }
        React.Children.map(element.props.children, func)
    }
    target.validate = validate
    return target
 }