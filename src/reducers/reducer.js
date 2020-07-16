import {combineReducers} from 'redux';




const addNote = (oldListOfNotes =[] , action) => {
    console.log(action.payload)
    if(action.type === 'CREATE_NOTE'){
        return [...oldListOfNotes + action.payload] ;
    }
    return oldListOfNotes
  };

  export default combineReducers({
    addNote: addNote,
    
});
  
  