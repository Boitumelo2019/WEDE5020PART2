function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var subject = document.getElementById("event-date");
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("guest");
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    

    if(name.length <5){
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if(guest.length <10){
        text = "Please Select Number Of Guests";
        error_message.innerHTML = text;
        return false;
    }

    if(subject.length <10){
        text = "Please Enter The Correct Subject";
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter The Valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter The Valid Email";
        error_message.innerHTML = text;
        return false;
    }
    
    if(message.length <= 140){
        text = "Please Enter More Than 140 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!")
    return true;
}




