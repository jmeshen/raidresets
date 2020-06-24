import { Calendar } from '@fullcalendar/core';
import rrulePlugin from '@fullcalendar/rrule';
import dayGridPlugin from '@fullcalendar/daygrid';

const resetTimers = {
  t4: 2,
  t5: 3,
  t6: 4,
  t7: 5,
};

const generateEvents = () => {};

document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2020-06-07',
    plugins: [dayGridPlugin, rrulePlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    events: [
      {
        title: 'Kara, Gruul, Mag',
        allDay: true,
        duration: { days: 2 },
        color: '#47843f',
        rrule: {
          freq: 'daily',
          interval: 2,
          dtstart: '2020-06-24',
        },
      },
      {
        title: 'SSC, The Eye, ZA',
        allDay: true,
        duration: { days: 3 },
        color: '#0070dd',
        rrule: {
          freq: 'daily',
          interval: 3,
          dtstart: '2020-06-24',
        },
      },
      {
        title: 'BT, Hyjal',
        allDay: true,
        duration: { days: 4 },
        color: '#a335ee',
        rrule: {
          freq: 'daily',
          interval: 4,
          dtstart: '2020-06-21',
        },
      },
      {
        title: 'Sunwell, Naxx, Ony',
        allDay: true,
        duration: { days: 5 },
        color: '#ff8000',
        rrule: {
          freq: 'daily',
          interval: 5,
          dtstart: '2020-06-26',
        },
      },
    ],
  });

  calendar.render();
});
