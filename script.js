function validation(){
    // Retrieve the values from the input fields
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    // Get error message display element
    var error_message = document.getElementById("error_message");
    var text;

    // Set the padding for the error message display
    error_message.style.padding = "10px" ;
    
    // Validate the name input
    if(name.length <5){
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    // Validate the subject input
    if(subject.length <10){
        text = "Please Enter The Correct Subject";
        error_message.innerHTML = text;
        return false;
    }

    // Validate the phone number input
    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter The Valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }

    // Validate the email input
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter The Valid Email";
        error_message.innerHTML = text;
        return false;
    }
    
    // Validate the message input
    if(message.length <= 100){
        text = "Please Enter More Than 100 Characters";
        error_message.innerHTML = text;
        return false;
    }

    // If all validations pass, alert the user and allow form submission
    alert("Form Submitted Successfully!")
    return true;
}