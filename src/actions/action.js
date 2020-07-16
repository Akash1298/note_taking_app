export const createNote = (data) => {
  console.log(data,"Done")
  return { 
    type: 'CREATE_NOTE',
    payload: data

    
  };
};