function Grocery (name, price) {
    this.name = name;
    this.price = price;
}
Grocery.prototype.Ordersummary= function (){
    return this.price
}

let Grocery1 = new Grocery("Apple", "40");
let Grocery2 = new Grocery("Black Olives 100g", "250");
let Grocery3 = new Grocery("Mango", "40");
let Grocery4 = new Grocery("Sukuma Wiki", "20");
let Grocery5 = new Grocery("Pears", "20");
let Grocery6 = new Grocery("Carrots 50g", "50");
let Grocery7 = new Grocery("Tomato", "15");
let Grocery8 = new Grocery("Broccoli", "50");

var cart=[];

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