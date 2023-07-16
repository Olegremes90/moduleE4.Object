function Status(){
    this.getTutrnon = function(){
        console.log('Прибор включен')
    }
    this.getTutnof = function() {
        console.log('Прибор выключен')
    }
}

function Lamp(price, color){
    this.price = price
    this.color = color
    this.isPower = function(number){
        console.log(`Мощность лампы составляет ${number} вт`)
    }
}

Lamp.prototype = new Status()

function Computer(model, size){
    this.model = model
    this.size = size
}
Computer.prototype = new Status()
Computer.prototype.getPrice = function(price,model){
    console.log(`Компьютер модели ${model} стоит ${price} рублей`)
}
const tableLamp = new Lamp(5000, 'grey')
console.log(tableLamp)
tableLamp.isPower(100)
tableLamp.getTutnof()
const mackbook = new Computer('Mackbook Pro', 'средний')
console.log(mackbook)
mackbook.getPrice(100000, 'Mackbook Pro')
mackbook.getTutrnon()