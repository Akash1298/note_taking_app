import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AddNote from './AddNote'


const App = () => {
 const[date,setDate] = useState(new Date());
        
 const onChange = date => {
     setDate(date)
 }

    return <div><Calendar onChange={onChange} value={date} />
    <AddNote date={date} />
    </div>
}

export default  App;    


