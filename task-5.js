class Car {
    getSpecs(car){
        console.log(`Max speed: ${car.maxSpeed}, Speed: ${car.speed}, Is on: ${car.isOn}, Distance: ${car.distance}, Price: ${car.price}`);
    };
 /*
  * Додай статичний метод `getSpecs(car)`,
  * який приймає об'єкт-машину як параметр і виводить
  * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
  */

 /*
  * Конструктор отримує об'єкт налаштувань.
  *
  * Додай властивості майбутнього екземпляра класу:
  * speed - поточна швидкість, початкова 0
  * price - ціна автомобіля
  * maxSpeed - максимальна швидкість
  * isOn - заведений автомобіль, значення true або false. Спочатку false
  * distance - загальний кілометраж, спочатку 0
  */
 constructor({speed,price,maxSpeed,isOn,distance}) {
    this.speed = speed;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
 };
getPrice() {
    return this.price;
 
};

 setPrice(value) {
    this.price = value;
 };
 /*
  * Додай геттер і сеттер для властивості price,
  * який буде працювати з властивістю ціни автомобіля.
  */

 /*
  * Додай код для того, щоб завести автомобіль
  * Записує у властивість isOn значення true
  */

 turnOn() {
    this.isOn = true;
 };

 /*
  * Додай код для того, щоб заглушити автомобіль
  * Записує у властивість isOn значення false,
  * і скидає поточну швидкість в 0
  */
 turnOff() {
    this.isOn = false;
    this.speed = 0;
 };

 /*
  * Додає до властивості speed отримане значення,
  * за умови, що результуюча швидкість
  * не більше, ніж значення властивості maxSpeed
  */
 accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
        this.speed += value;
    } else {
        this.speed = this.maxSpeed;
    }
 };

 /*
  * Забирає від властивості speed отримане значення,
  * за умови, що результуюча швидкість не менше нуля
  */
 decelerate(value) {
    if (this.speed - value >= 0) {
        this.speed -= value;
    } else {
        this.speed = 0;
    }
 };

 /*
  * Додає в поле distance кілометраж (hours * speed),
  * але тільки в тому випадку, якщо машина заведена!
  */
 drive(hours) {
    if (this.isOn) {
        this.distance += hours * this.speed;
    } else {
        console.log('Автомобіль заглушений!');
    }
 };
};

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000