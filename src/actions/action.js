
export const createNote = (date, title, content) => {
    return async dispatch => { 
      dispatch({ type: 'CREATE_NOTE',
      payload: {
        date: date,
        title: title,
        content: content
        
      }
    });
  };
};