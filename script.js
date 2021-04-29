$(document).ready( function(){
    function Grocery (Fruit,Vegetable) {
        this.Fruit=Fruit
        this.Vegetable=Vegetable
    }
    Grocery.prototype.Ordersummary= function (){
        return this.GetFruitscost()+ this.Vegetablescost()
    }
    
    Grocery.prototype.GetFruitscost= function(){
    
        if(this.Fruit=="Oranges"){
            return 15
        }
        else if(this.Fruit=="Pears"){
            return 20
        }
        else if(this.Fruit=="Mango"){
            return 40
        }
        else if (this.Fruit=="Strawberries"){
            return 100
        }
        else if(this.Fruit=="Ovacado"){
            return 30
        }
        else 
            return 50   
    }
    
    Grocery.prototype.Vegetablescost= function(){
    
        if(this.Vegetable=="Sukuma-wiki"){
            return 25
        }
        else if(this.Vegetable=="Brocoli"){
            return 20
        }
        else if(this.Vegetable=="Green peppers"){
            return 30
        }
        else if (this.Vegetable=="Peas"){
            return 20
        }
        else if(this.Vegetable=="Zucchini"){
            return 30
        }
        else 
            return 50   
    }
    

    $("#brocoli").click(function(){
        var broccoli=document.getElementById("brocoli").val;
        $(".unordered").append("<li>" + broccoli + "<li>")
    });
    $("#mango").click(function(){
        var mango=document.getElementById("mango").val;
        $(".unordered").append("<li>" + mango + "<li>")
    });
    $("#lemon").click(function(){
        var lemon=document.getElementById("lemon").val;
        $(".unordered").append("<li>" + lemon + "<li>")
    });
    $("#spinach").click(function(){
        var spinach=document.getElementById("spinach").val;
        $(".unordered").append("<li>" + spinach + "<li>")
    });
    $("#sukuma").click(function(){
        var sukuma=document.getElementById("sukuma").val;
        $(".unordered").append("<li>" + sukuma + "<li>")
    });
    $("#peas").click(function(){
        var peas=document.getElementById("peas").val;
        $(".unordered").append("<li>" + peas + "<li>")
    });
    $("#avocado").click(function(){
        var avocado=document.getElementById("avocado").val;
        $(".unordered").append("<li>" + avocado + "<li>")
    });
    $("#zucini").click(function(){
        var zucchini=document.getElementById("zucchini").val;
        $(".unordered").append("<li>" + zucchini + "<li>")
    });
    $("#tomato").click(function(){
        var tomato=document.getElementById("tomato").val;
        $(".unordered").append("<li>" + tomato + "<li>")
    });
    $("#olives").click(function(){
        var olives=document.getElementById("olives").val;
        $(".unordered").append("<li>" + olives + "<li>")
    });
    $("#apple").click(function(){
        var apple=document.getElementById("apple").val;
        $(".unordered").append("<li>" + apple + "<li>")
    });
    $("#straw").click(function(){
        var strawberrie=document.getElementById("straw").val;
        $(".unordered").append("<li>" + strawberrie + "<li>")
    });
    $("#pears").click(function(){
        var pears=document.getElementById("pears").val;
        $(".unordered").append("<li>" + pears + "<li>")
    });
    $("#sprouts").click(function(){
        var sprouts=document.getElementById("sprouts").val;
        $(".unordered").append("<li>" + sprouts + "<li>")
    });
    $("#green").click(function(){
        var green=document.getElementById("green").val;
        $(".unordered").append("<li>" + green + "<li>")
    });
    $("#carrots").click(function(){
        var carrots=document.getElementById("carrots").val;
        $(".unordered").append("<li>" + carrots + "<li>")
    });
    $("#cabbage").click(function(){
        var cabbage=document.getElementById("cabbage").val;
        $(".unordered").append("<li>" + cabbage + "<li>")
    });
    $("#cilantro").click(function(){
        var cilantro=document.getElementById("cilantro").val;
        $(".unordered").append("<li>" + cilantro + "<li>")
    });
    $("#oranges").click(function(){
        var oranges=document.getElementById("oranges").val;
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
