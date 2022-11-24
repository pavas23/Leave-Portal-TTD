import React, { useState } from 'react';
import Calendar from 'react-select-date';

function DatePicker({setDates}) {
const [multipleDate, setMultipleDate] = useState();
const dateLogger = () => {
    setDates(multipleDate)
    console.log(multipleDate)
}
return (
     <Calendar
       onSelect = {(date) => setMultipleDate(date)}
       templateClr = 'blue'
       selectDateType = 'multiple'
       showDateInputField = { false }
       onChange = {dateLogger}
     />
   );
}

export default DatePicker ;