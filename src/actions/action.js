export function createNote(data) {
  return { type: 'CREATE_NOTE', payload: data }
}

export const editNote = selectedNote => {
  
  return {type:'EDIT_NOTE', payload:selectedNote };
}

//export const updatedNote = update => {
  //return {type:'UPDATED', payload:update}
//}