window.onload = function(){

    var myForm = document.querySelector("div form");

    myForm.addEventListener('submit', e =>{
        e.preventDefault();

        var email = document.getElementById("email").value;

        if(email != ""){
            alert(`Thank you for subscribing! Your email address: ${email} has been added to our mailing list!`);
        }else{
            alert('Please enter a Valid Email Address');

        }

    })
    
}