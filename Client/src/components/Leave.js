import React, {useState} from 'react'
import DatePicker from './DatePicker'   

export default function Leave() {
    const [showDate, setShowDate] = useState(false);
    
    return (
    <div>
        <input type={`text`} />
        <button onClick={() => setShowDate(prev => !prev)}>{showDate ? "Exit" : "Select Date"}</button>
        {
            showDate ? <DatePicker /> : null
        }
    </div>
  )
}
