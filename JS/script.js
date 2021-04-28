function Grocery (Fruit,Vegetable) {
    this.Fruit=Fruit
    this.Vegetable=Vegetable
}
Grocery.prototype.Ordersummary= function (){
    return this.GetFruitscost()+ this.Vegetablescost()
}

// let Grocery1 = new Grocery("Apple", "40");
// let Grocery2 = new Grocery("Black Olives 100g", "250");
// let Grocery3 = new Grocery("Mango", "40");
// let Grocery4 = new Grocery("Sukuma Wiki", "20");
// let Grocery5 = new Grocery("Pears", "20");
// let Grocery6 = new Grocery("Carrots 50g", "50");
// let Grocery7 = new Grocery("Tomato", "15");
// let Grocery8 = new Grocery("Broccoli", "50");

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

var cart=[];
var customerName = "";
var totalCost = 0
var estate = "";

$("#brocoli").click(function(){
    $(".cart-items").append(".Brocoli")
});
$("#mango").click(function(){
    $(".cart-items").append(".Mango")
});
$("#lemon").click(function(){
    $(".cart-items").append(".Lemon")
});
$("#spinach").click(function(){
    $(".cart-items").append(".Spinach")
});
$("#sukuma").click(function(){
    $(".cart-items").append(".Sukuma")
});
$("#peas").click(function(){
    $(".cart-items").append(".Peas")
});
$("#avocado").click(function(){
    $(".cart-items").append(".Avocado")
});
$("#zucini").click(function(){
    $(".cart-items").append(".Zuccini")
});
$("#tomato").click(function(){
    $(".cart-items").append(".Tomato")
});
$("#olives").click(function(){
    $(".cart-items").append(".Black")
});
$("#apple").click(function(){
    $(".cart-items").append(".Apple")
});
$("#straw").click(function(){
    $(".cart-items").append(".Berries")
});
$("#pears").click(function(){
    $(".cart-items").append(".Pears")
});
$("#sprouts").click(function(){
    $(".cart-items").append(".Brussels")
});
$("#green").click(function(){
    $(".cart-items").append(".Green")
});
$("#carrots").click(function(){
    $(".cart-items").append(".Carrots")
});
$("#cabbage").click(function(){
    $(".cart-items").append(".Cabbage")
});
$("#oranges").click(function(){
    $(".cart-items").append(".Oranges")
});