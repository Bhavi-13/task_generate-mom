const meetingDate = new Date('2023-05-12');
const meetingTime = '2:00pm - 3:00pm';
const meetingLocation = 'Virtual';
const agendaItems = ['Introduction', 'Approval of previous meeting minutes', 'Discussion of current projects', 'New business', 'Adjournment'];
const minutesItems = [
  'The meeting was called to order at 2:00pm.',
  'The previous meeting minutes were approved as written.',
  'Discussion of current projects took place, with updates provided by each team member.',
  'Under new business, it was decided to schedule a follow-up meeting in two weeks.',
  'The meeting was adjourned at 3:00pm.'
];

// Set meeting date, time, and location
document.getElementById('meeting-date').textContent = meetingDate.toLocaleDateString();
document.getElementById('meeting-time').textContent = `Time: ${meetingTime}`;
document.getElementById('meeting-location').textContent = `Location: ${meetingLocation}`;

// // Add agenda items to list
const agendaList = document.getElementById('agenda-list');
agendaItems.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  agendaList.appendChild(li);
});

// Add minutes items to list
const minutesList = document.getElementById('minutes-list');
minutesItems.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  minutesList.appendChild(li);
});
