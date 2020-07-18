import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import NoteForm from './NoteForm';
import AllNotes from './AllNotes';


const App = () => {
 const[date,setDate] = useState(new Date());
 
        
 const onChange = date => {
     setDate(date)
 }

    return <div><Calendar onChange={onChange} value={date} /><br/><br/>
    <NoteForm date={date} /><br/><br/><br/><br/>
    <AllNotes/>
        </div>
}

export default  App;    


