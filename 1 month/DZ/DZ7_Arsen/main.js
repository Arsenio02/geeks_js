// class Cars {
//     constructor(model, color, wheels) {
//         this.model = model;
//         this.color = color;
//         this.wheels = wheels;
//     }
//
//     start() {
//         console.log('Машина заведена');
//     }
// }
//
// class SportCar extends Cars {
//     constructor(model, color, wheels, maxSpeed) {
//         super(model, color, wheels);
//         this.maxSpeed = maxSpeed;
//     }
// }
//
// class SUV extends Cars {
//     constructor(model, color, wheels, clearance) {
//         super(model, color, wheels);
//         this.clearance = clearance;
//     }
// }
//
// class Truck extends Cars {
//     constructor(model, color, wheels, maxLoad) {
//         super(model, color, wheels);
//         this.maxLoad = maxLoad;
//     }
// }
//
// const sportCar = new SportCar('Ferrari', 'Red', 4, 350);
// const suv = new SUV('Jeep', 'Black', 4, '220 mm');
// const truck = new Truck('Volvo', 'White', 6, '25 ton');
//
// sportCar.start();
// suv.start();
// truck.start();




// class TrafficLight {
//     constructor() {
//         this.lights = document.querySelectorAll('.light');
//     }
//
//     setRed() {
//         this.lights[0].classList.add('active');
//         this.lights[1].classList.remove('active');
//         this.lights[2].classList.remove('active');
//     }
//
//     setYellow() {
//         this.lights[0].classList.remove('active');
//         this.lights[1].classList.add('active');
//         this.lights[2].classList.remove('active');
//     }
//
//     setGreen() {
//         this.lights[0].classList.remove('active');
//         this.lights[1].classList.remove('active');
//         this.lights[2].classList.add('active');
//     }
// }
//
// const trafficLight = new TrafficLight();
//
// const color = prompt('Введите цвет:');
//
// switch (color) {
//     case 'красный':
//         trafficLight.setRed();
//         break;
//     case 'желтый':
//         trafficLight.setYellow();
//         break;
//     case 'зеленый':
//         trafficLight.setGreen();
//         break;
//     default:
//         alert('Неверный цвет!');
//         break;
// }