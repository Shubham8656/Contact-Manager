export const addToContact = (payload) =>{
    return{
        type:'ADD_CONTACT',
        payload:payload
    }
}
export const deleteContact = (payload) =>{
    return{
        type:'DELETE_CONTACT',
        payload:payload
    }
}
export const editContact = (payload) =>{
    return{
        type:'EDIT_CONTACT',
        payload:payload
    }
}
