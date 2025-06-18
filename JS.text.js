const eventDate = form['event-date'];
if (!eventDate.value) {
  showError(eventDate, 'Please select the event date.');
  valid = false;
} else {
  const today = new Date();
  const selectedDate = new Date(eventDate.value + 'T00:00:00');
  if (selectedDate < today.setHours(0, 0, 0, 0)) {
    showError(eventDate, 'Please select today or a future date.');
    valid = false;
  }
}
const guests = form.guests;
if (!guests.value.trim() || isNaN(guests.value) || parseInt(guests.value) <= 0) {
  showError(guests, 'Please enter a valid number of guests (> 0).');
  valid = false;
}
return valid;

form.addEventListener('submit', e => {
if (!validateForm()) {
  e.preventDefault();
}
});

