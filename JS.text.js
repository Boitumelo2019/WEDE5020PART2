const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const eventType = document.getElementById("event-type").value;
const eventDate = document.getElementById("event-date").value;
const guests = document.getElementById("guests").value;

if(isNaN(phone) || phone.length != 10){
  text = "Please Enter The Valid Phone Number";
  error_message.innerHTML = text;
  return false;
}

if (!name || !email || !phone || !eventType || !eventDate || !guests) {
    alert("Please fill in all required fields.");
    return;
}
// Create a data object to send
const formData = {
    name: name,
    email: email,
    phone: phone,
    eventType: eventType,
    eventDate: eventDate,
    guests: guests,
    message: document.getElementById("message").value.trim()
};
// Simulate form submission (you can replace this with an actual AJAX request)
console.log("Form submitted:", formData);
alert("Your enquiry has been submitted!");
// Optionally, reset the form
form.reset();



