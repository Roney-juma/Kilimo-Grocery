$(document).ready( function(){
    function Grocery (item,price) {
        this.price=price
        this.item=item
    }
    // var newItem = new Grocery(price, item);
    
    $("#brocoli").click(function(){
        var broccoli = $("#brocoli").val();
        alert(brocoli)
        $(".unordered").append("<li>" + broccoli + "<li>" )
    });
    $("#mango").click(function(){
        var mango= $("#mango").val();
        $(".unordered").append("<li>" + mango + "<li>")
    });
    $("#lemon").click(function(){
        var lemon= $("#lemon").val();
        $(".unordered").append("<li>" + lemon + "<li>")
    });
    $("#spinach").click(function(){
        var spinach=$("#spinach").val();
        $(".unordered").append("<li>" + spinach + "<li>")
    });
    $("#sukuma").click(function(){
        var sukuma= $("#sukuma").val();
        $(".unordered").append("<li>" + sukuma + "<li>")
    });
    $("#peas").click(function(){
        var peas= $("#peas").val();
        $(".unordered").append("<li>" + peas + "<li>")
    });
    $("#avocado").click(function(){
        var avocado= $("#avocado").val();
        $(".unordered").append("<li>" + avocado + "<li>")
    });
    $("#zucini").click(function(){
        var zucchini= $("#zucchini").val();
        $(".unordered").append("<li>" + zucchini + "<li>")
    });
    $("#tomato").click(function(){
        var tomato= $("#tomato").val();
        $(".unordered").append("<li>" + tomato + "<li>")
    });
    $("#olives").click(function(){
        var olives= $("#olives").val();
        $(".unordered").append("<li>" + olives + "<li>")
    });
    $("#apple").click(function(){
        var apple= $("#apple").val();
        $(".unordered").append("<li>" + apple + "<li>")
    });
    $("#straw").click(function(){
        var strawberrie= $("#straw").val();
        $(".unordered").append("<li>" + strawberrie + "<li>")
    });
    $("#pears").click(function(){
        var pears= $("#pears").val();
        $(".unordered").append("<li>" + pears + "<li>")
    });
    $("#sprouts").click(function(){
        var sprouts= $("#sprouts").val();
        $(".unordered").append("<li>" + sprouts + "<li>")
    });
    $("#green").click(function(){
        var green= $("#green").val();
        $(".unordered").append("<li>" + green + "<li>")
    });
    $("#carrots").click(function(){
        var carrots= $("carrots").val();
        $(".unordered").append("<li>" + carrots + "<li>")
    });
    $("#cabbage").click(function(){
        var cabbage= $("#cabbage").val();
        $(".unordered").append("<li>" + cabbage + "<li>")
    });
    $("#cilantro").click(function(){
        var cilantro= $("#cilantro").val();
        $(".unordered").append("<li>" + cilantro + "<li>")
    });
    $("#oranges").click(function(){
        var oranges= $("#oranges").val();
        $(".unordered").append("<li>" + oranges + "<li>")
    });

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

})
