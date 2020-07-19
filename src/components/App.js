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

    return <div className='ui container grid' >
        <div className='column ten wide' ><br/>
            <Calendar onChange={onChange} value={date} /><br/><br/>
        </div>
        <div>
            <NoteForm date={date.toLocaleDateString()} /><br/><br/><br/><br/>
        </div>
        <div className='column eight wide'>
            <AllNotes/>
        </div>
        </div>
}

export default  App;    


