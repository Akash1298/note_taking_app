import {combineReducers} from 'redux';

const addNotes = (oldListOfNotes = [], action) => {
    
    if(action.type === 'CREATE_NOTE'){
    return [...oldListOfNotes, action.payload];
    }
    return oldListOfNotes;
};

const editNotes = (selectedNote=[], action) => {
    if(action.type === 'EDIT_NOTE'){
        return  action.payload
    }
    return selectedNote;
}
  
export default combineReducers({
    addNote:addNotes,
   editNote:editNotes
});

////OR

