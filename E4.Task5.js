"use strict";
class Status {
    constructor() {}
    getTurnon(){
        console.log('Прибор включен')
    }
    getTurnof(){
        console.log('Прибор выключен')
    }
}



class Lamp extends Status{
   constructor(price, color) {
       super();
       this.price = price;
       this.color = color;
   }
}
class Computer extends Status{
    constructor(model, size) {
        super();
        this.model = model;
        this.size = size
    }
    getPrice(model,price){
        console.log(`Компьютер модели ${model} стоит ${price} рублей`)
    }
}
const lamp = new Lamp(10, 'grey')
console.log(lamp)
lamp.getTurnof()
const comp = new Computer('macbook pro', 'средний')
console.log(comp)
comp.getPrice('macbook', 100000)