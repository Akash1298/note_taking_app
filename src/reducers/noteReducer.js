const noteReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [...state, action.data]
        case 'DELETE_NOTE':
            return state.filter((post) => post.id !== action.id)
        case 'EDIT_NOTE' :
            return state.map((note) => note.id === action.id ? {...note, edit :!note.edit}: note)
        case 'UPDATE' :
            return state.map((note) => {
            if(note.id === action.id){
            return {...note, 
                title:action.data.newTitle,
                content:action.data.newcontent,
                edit: !note.edit
            }
            }else return note;
            })
        default:
            return state;    
    }
}

export default noteReducer;