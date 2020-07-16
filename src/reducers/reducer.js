export default function addNote(oldListOfNotes = [], action){
    console.log(action.payload)
    if(action === 'CREATE_NOTE'){
        return [...oldListOfNotes+action.payload];
    }
    return oldListOfNotes;
};
  