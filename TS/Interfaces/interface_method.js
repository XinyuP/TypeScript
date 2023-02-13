var blaire = {
    id: 11111,
    first: 'Blaire',
    last: 'Pang',
    nickname: 'bp'
};
// Property 'sayHi' is missing
var blaire = {
    id: 11111,
    first: 'Blaire',
    last: 'Pang',
    nickname: 'bp',
    sayHi: function () { return 'Hello'; }
};
var blaire = {
    id: 11111,
    first: 'Blaire',
    last: 'Pang',
    nickname: 'bp',
    sayHi: function (name) { return 'Hello'; }
};
var shoes = {
    name: 'Nike',
    price: 100,
    applyDiscount: function (discount) {
        var newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(.4)); // 60
