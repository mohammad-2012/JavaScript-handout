//            📗📘📕Object-Oriented Programming📗📘📕  OOP
/*
praperties : 
مثلا رنگ ماشن مدل سرعت
یا مثلا در چراغ به روشنایی توان مصرفی می گویند پراپرتی و به خاموش شدن چراغ و روشن شدن هم می گ.یند متد
و به
methods :
که در او او پی مثلا کوتاه شده فانکشن ها هست
مثل
گاز دادن 
ترمز کردن
استارت زدن
*/

//

//از کلاس توی جاوااسکریپت   زمانی استفاده می شودکه می خواهی کد های شی گرا بنویسی
//  class Car {

//     // PROPERTISE OF CAR OBJECT
//     constructor(name){
//         this.name = name
//         this.speed = 0
//         this.isEngineOn = false
//     }

//     // Method
//     startEngine(){
//         this.isEngineOn = true
//         console.log(`${this.name} engine has started`)
//     }

//     //Method
//     accelerate(){
//         this.speed += 100
//         console.log(`Car Speed: ${this.speed} km/h`)
//     }
//  }

// //Instance
// const myCar =  new Car("bmw")  //اینجا خود ساختمون را ساختیم بالا کل کد ها نقشه ساختمون بود   و مقدار جلوی نیو باید برابر با اون اسم بالایی باشه
// myCar.startEngine()

// >>

//الگوی نوشتن پراپرتی ها    this.name = "mohammad"
//!!در نوشتن اسم کلاس بهتره اصولیتر  اولین کلمه اسم را با حرف بزرگ بنویسیم!!

// class Person{
//     // Peraperty
// constructor(name , age){
// this.name = name
// this.age = age
// }

// Method
// introduce(){
//     console.log(`hello ${this.name} and you have ${this.age} years old`)
// }

// }

// میاد به خود  به این اینستنس اشاره میک نه مثلا دیس دات نام میاد پایین اون می می گخ محم اون ابراهیم می گه ابی this.name
//پس دیس داخل کلاس اشاره می کنه به هر کدوم از  اون اینستنس هایی که که فعلا داره روش  کار می کنه

// Instance
// const me = new Person("mohammad" , 14)
// me.introduce()

// Instance
// const ebrahim = new Person("ebi " , 10)
// ebrahim.introduce()

//پارامتر دادن به متد ها
class Car {
  constructor(name, engineStatus) {
    this.name = name;
    this.speed = 0;
    this.isEngineOn = engineStatus;
  }

  accelerate(amount) {
    if (this.isEngineOn == "on") {
      this.speed += amount;
      console.log(`${this.name}'s speed is ${this.speed} km/h`);
    } else {
      console.log("you need to start the engine first!");
    }
  }
}

const myCar = new Car("Peugeot 405", "on");
myCar.accelerate(300);

const youCar = new Car("BMW", "off");
youCar.accelerate(180);
