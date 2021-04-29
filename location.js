function locationName(){

    prompt("Enter your location:");
    prompt("Enter your name:");
    prompt("Enter your phone number:");
    alert("Your groceries will be delivered in a while, thanks for placing your order.");
}
locationName();

$(document).ready(function(){
    
        $("form").submit(function() {
            var Name = $("#Name").val();
            var Email = $("#Email").val();
            var Message = $("#Message").val(); 
    
    if (Name == "" || Email == "" || Message == "") {
        alert("Kindly Enter your details correctly!");
    } else alert(" Hello " + Name + ", your message has been received and recorded successfully");
    });
    });