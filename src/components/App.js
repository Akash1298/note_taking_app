import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AddNote from './AddNote';
import NoteList from './NoteList'
import EditNote from './EditNote';


const App = () => {
 const[date,setDate] = useState(new Date());
        
 const onChange = date => {
     setDate(date)
 }

    return <div><Calendar onChange={onChange} value={date} /><br/><br/>
    <AddNote date={date} /><br/><br/><br/><br/>
    <NoteList/><br/><br/><br/><br/>
    <EditNote/>
    </div>
}

export default  App;    


