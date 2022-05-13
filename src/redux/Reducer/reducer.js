const initialState = [
    {
        id: 0,
        name: "Anonymous",
        email: "Anonymous@gmail.com"
    }
]
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CONTACT': return [...state, action.payload];
        case 'DELETE_CONTACT': return state.filter(contact => contact.id !== action.payload);
        case 'EDIT_CONTACT': return (state.map(contact => {
            if (contact.id === action.payload.id)
                return action.payload
            else
                return contact
        }))
        default: return state
    }
}
export default reducer