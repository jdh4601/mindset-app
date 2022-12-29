import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <h1>Calendar</h1>
      <Calendar
        onChange={onChange}
        value={value}
        formatDay={(locale, date) =>
          date.toLocaleString('en', { day: 'numeric' })
        }
        selectRange={true}
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
      />
    </div>
  );
};

export default MyCalendar;
