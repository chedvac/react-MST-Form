import axiosWrapper from '../core/axiosWrapper'
import qs from 'qs';

const endpointsUrl = {
    submit: '',
    saveAsPdf: ''
}

const mwWrapper = function(action){
    return axiosWrapper({url: endpointsUrl[action], method: 'POST', data: qs.stringify({})});
}

const getResponse = function(settings = {}){
    mwWrapper(settings.action).then((response)=>{

    });
}