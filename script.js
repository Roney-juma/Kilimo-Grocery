$(document).ready( function(){
   
    
    $("#brocoli").click(function(){
        var broccoli = $("#brocoli").val();
        $(".unordered").append("<li>Broccoli Ksh. " + broccoli + "<li>" )
    });
    $("#mango").click(function(){
        var mango= $("#mango").val();
        $(".unordered").append("<li>Mango Ksh. " + mango + "<li>")
    });
    $("#onions").click(function(){
        var onions= $("#onions").val();
        $(".unordered").append("<li>White Onions Ksh. " + onions + "<li>")
    });
    $("#lemon").click(function(){
        var lemon= $("#lemon").val();
        $(".unordered").append("<li>Lemon Ksh. " + lemon + "<li>")
    });
    $("#spinach").click(function(){
        var spinach=$("#spinach").val();
        $(".unordered").append("<li>Spinach Ksh. " + spinach + "<li>")
    });
    $("#sukuma").click(function(){
        var sukuma= $("#sukuma").val();
        $(".unordered").append("<li>Sukuma-Wiki Ksh. " + sukuma + "<li>")
    });
    $("#peas").click(function(){
        var peas= $("#peas").val();
        $(".unordered").append("<li>Peas Ksh. " + peas + "<li>")
    });
    $("#avocado").click(function(){
        var avocado= $("#avocado").val();
        $(".unordered").append("<li>Avocado Ksh. " + avocado + "<li>")
    });
    $("#zucini").click(function(){
        var zucchini = $("#zucchini").val();
        $(".unordered").append("<li>Zucchini Ksh. " + zucchini + "<li>")
    });
    $("#tomato").click(function(){
        var tomato= $("#tomato").val();
        $(".unordered").append("<li>Tomato Ksh. " + tomato + "<li>")
    });
    $("#olives").click(function(){
        var olives= $("#olives").val();
        $(".unordered").append("<li>Black Olives Ksh. " + olives + "<li>")
    });
    $("#apple").click(function(){
        var apple= $("#apple").val();
        $(".unordered").append("<li>Apple Ksh.  " + apple + "<li>")
    });
    $("#straw").click(function(){
        var strawberrie= $("#straw").val();
        $(".unordered").append("<li>Strawberries Ksh. " + strawberrie + "<li>")
    });
    $("#pears").click(function(){
        var pears= $("#pears").val();
        $(".unordered").append("<li>Pears Ksh. " + pears + "<li>")
    });
    $("#sprouts").click(function(){
        var sprouts= $("#sprouts").val();
        $(".unordered").append("<li>Spouts Ksh. " + sprouts + "<li>")
    });
    $("#green").click(function(){
        var green= $("#green").val();
        $(".unordered").append("<li>Green Peppers Ksh. " + green + "<li>")
    });
    $("#carrots").click(function(){
        var carrots= $("carrots").val();
        $(".unordered").append("<li>Carrots Ksh. " + carrots + "<li>")
    });
    $("#cabbage").click(function(){
        var cabbage= $("#cabbage").val();
        $(".unordered").append("<li>Cabbage Ksh. " + cabbage + "<li>")
    });
    $("#cilantro").click(function(){
        var cilantro= $("#cilantro").val();
        $(".unordered").append("<li>Cilantro Ksh. " + cilantro + "<li>")
    });
    $("#oranges").click(function(){
        var oranges= $("#oranges").val();
        $(".unordered").append("<li>Oranges Ksh. " + oranges + "<li>")

    });

   

    var prizes=[]
    prizes.push(oranges,mango,onions,cabbage,carrots,cilantro,
            straw,green,sprouts,pears,peas,apple,olives,tomato,
            avocado,sukuma,spinach,lemon);




    $("#checkout").click(function () {
        $(".checkout-options").show();
    });
    $("#checkout-form").submit(function (event) {
        event.preventDefault();
        var name = $("#name").val();
        var deliveryOption = $("#delivery-option").val();
        customerName = name;
        console.log(name);
        console.log(deliveryOption);
        $("#name").val("");
        $("#delivery-option").val("");
        $(".checkout-options").hide();
        if (deliveryOption === "deliver") {
            $(".location").show();
            $(".delivery-cost").show();
            $("#delivery-amount").append(100);
            totalCost += 100;
            $("#total-amount").empty();
            $("#total-amount").append(totalCost);
        } else {
            alert(customerName + ": Your total bill is Ksh. " + totalCost + ". Your order will be ready for collection in the next 15 minutes.");
        }
    });
    $("#location-form").submit(function (event) {
        event.preventDefault();
        var estateEntered = $("#estate").val();
        var houseNumberEntered = $("#house-number").val();
        estate = estateEntered;
        houseNumber = houseNumberEntered;
        console.log(estate);
        console.log(houseNumber);
        $(".location").hide();
        alert(customerName + ": Your total bill is   Ksh. " + totalCost + ". Your order will be delivered to " + estate + " Estate, House Number   " + houseNumber + " in 20 minutes time.We appriciate your coperation.");
    });
    $("form").submit(function() {
        var Name = $("#Name").val();
        var Email = $("#Email").val();
        var Message = $("#Message").val(); 

    if (Name == "" || Email == "" || Message == "") {
    alert("Kindly Enter your details correctly!");
    } 
    else alert(" Hello " + Name + ", your message has been received and recorded successfully");
    });
});
