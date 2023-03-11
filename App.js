// import logo from './logo.svg';
import './App.css';
import './calendar.css';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
      title: "Meeting",
      allDay: true,
      start: new Date(2023, 3, 0),
      end: new Date(2023, 3, 0),
  },
  {
      title: "Workshop on React JS",
      start: new Date(2023, 3, 0),
      end: new Date(2023, 3, 0),
  },
  {
      title: "Conference",
      start: new Date(2023, 3, 0),
      end: new Date(2023, 3, 0),
  },
];


function App() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    let check = prompt('Are You a admin')
    if(check == "admin@gmail.com")
    {
      for (let i=0; i<allEvents.length; i++){

        const d1 = new Date (allEvents[i].start);
        const d2 = new Date(newEvent.start);
        const d3 = new Date(allEvents[i].end);
        const d4 = new Date(newEvent.end);
  /*
      console.log(d1 <= d2);
      console.log(d2 <= d3);
      console.log(d1 <= d4);
      console.log(d4 <= d3);
        */

         if (
          ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
            (d4 <= d3) )
          )
        {   
            alert("CLASH"); 
            break;
         }

    }
    setAllEvents([...allEvents, newEvent]);
    }
    else{
    alert("Only admin can add events");
    document.getElementsByClassName('evtime').hidden = true;  
    }
  }

  return (
      <div className="App">
        <div className='addevent'>
        <h1 className='head'>Calendar</h1>
        </div>
          <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin:'20px',width: '95%' ,color:'black', fontFamily: 'Arial, Helvetica, sansSerif' ,backgroundColor:'lightblue',fontSize:'25px'}} />

     <h2 className='addev'>Add New Event</h2>
          <div className='evtime'>
              <input className='inpt' type="text" placeholder="Add Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
              <DatePicker className='inpt'  style={{height:'100px' , width:'130px'}} placeholderText="Start Date" selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
              <DatePicker className='inpt' style={{height:'100px' , width:'130px'}}  placeholderText="End Date" stplaceholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
          </div>
          <button className='btn' stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                  Add Event
              </button>
      </div>
      
  );
}

export default App;