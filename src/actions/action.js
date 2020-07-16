
export const createNote = (date, title, content) => {
    return { 
      type: 'CREATE_NOTE',
      payload: {
        date: date,
        title: title,
        content: content
        
      }
    };
  };
  
 