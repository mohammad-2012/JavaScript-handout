// // let coments = "mohammad"
// // console.log(typeof coments)
// // let size = 15
// // console.log(typeof size)
// // let mm = true
// // console.log(typeof mm)
// // let my;
// // console.log(typeof my)
// // let nn = null
// // console.log(nn)

// // Array==آرایه
// let nonoo = ["html","css", 66]
// console.log(nonoo)
// // console.log(nonoo[1])  //برای گرفتن ایندکس ارایه ها
// // document.write(nonoo[1])

// // object
// // let fristnName = "mohammad";
// // let lastName = "akbari";
// // let age = 15;

// let all = {
//      fristName :"mohammad",
//      lastName : "akbari",
//      age: 15
//}

// console.log(all)
// console.log(all.age)  //برای گرفت ایدکس ابجکت ها

// // دو روش برای توان
// // let a = 5;
// // console.log(a ** 2)

// console.log(Math.pow(a , 2))

// // عملگر های انتسابی
//  let x = 6;

// x = x + 10;
// // //or
// //  x += 10;
// // x -= 2;
// // x *= 2;
// // x %= 2;
// // x /= 2;
// x **= 2;
// console.log(x)

// let x = 50;
// let w = 50;
// console.log(x > w)
// // console.log(x <= w)   //ایا xکوچک تر از wاست؟ایا هر دو مساوی باهم هستد؟
// // console.log(x == w)
// // console.log(x === w) //در 3 تا مساوی   تایپ هم محاسبه می شود
// console.log(x != w)
// console.log(x !== w)

// // let mobilenomre = 202;
// // let brand = "som" ;

// // if(mobilenomre > 100 && brand == "som"){
// //     console.log("اجازه ورود صادر شد")
// // }else{
// //     console.log('محصول اصل نمی باشد')
// // }
// // && ===  (and) = و
// // || === (or) = یا

// // عملگر nulishچیست؟ عملگری است که وقتی مقدار یک المنت را خالی می گذاریم یا مقدارش را undefined  یا null بگذاریم می تونیم در جوابش به جای جواب های ان دو کلمه با قرار دادن دو تا علامت سوال و نوشتن مقدار استرینگ به مثال زیر توجه کنید
// let alertt =  undefined ?? "!خطا!";
// console.log(alertt)

// let name = undefined;
// name ??= "خطا"
// console.log(name)

// let moshakhasat = {
//     thems: ""
// };
// let log = moshakhasat.thems ;
// log ??= "red"
// console.log(log)

// //  اموزش چسبوندن دو المنت یا در اصل دو متغیر بهم با concat
// let name = "mohammad ";
// let lName = "akbari"

// console.log(name + lName)  //روش اول1/1
// let plus = name + lName;  //روش اول1/2
// console.log(plus)
// //روش دوم
// let result = name.concat("", lName)
// console.log(result)

// // // //هر چیزی که جلوی ان پارانتز باز شود به ان متد گفته می شود

// console.log(isNaN("mohammad"))  //می گه که محمد نابر نیست وجواب هم می گه درست میگی
// console.log(isNaN(2))

// let numbers = "89765432543647";
// if(isNaN(numbers)){
//     console.log("is not ok")
// }else{
//     console.log("ok")
// }

// // دو روش برای رفتن به خط بعدی
// // console.log("chert pert !  \n  mdnnnd ")
// // console.log(`chert pert !
// //       mdnn
// //       nd `)

// // ............

// let mypool = 19;
// if(mypool > 200){
//     console.log("شما می توناید ماشین پژو بخرید")
// }else{
//     let Required = 200 - mypool
//     console.log(`شماد قادر به خرید پژو نیستید و پول شما ${Required } کم است`)
// }

// falsey مقادیر
// console.log(Boolean(0))
// console.log(Boolean(""))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(NaN))
// // //or
// console.log(!!NaN)

// let color = "white"
// if (color === "blue") {
//     console.log("your color is blue")
// } else if (color === "red") {
//     console.log("your color is red")
// } else {
//     console.log("go get lost")
// }

// // temary operator
// let age = 15;
// let beverage = age >= 22 ? "عرق سگی" : "آب بخور"
// console.log(beverage)

// const score = 100;
// let rate = null;
// if (score === 100){
//     rate = "bh bh"
// }else if (score === 50){
//     rate = "ah ah"
// }else{
//     rate = "bad boy"
// }

// let rate1 = score === 100 ? "bh bh" : score <= 50 ? "ah ah" : "nist"
// console.log(rate1)

// switch-case 👇↙️
// let size = 100;
// switch (size) {
//   case 100:
//     console.log("its smal ");
//     break;
//   case 50:
//     console.log("its x-larg ");
//     break;
//   default:
//     console.log("nist");
// }

// for  👇
// for (let i = 1; i <= 10; i++){
//   console.log("mohammad" , i)
// }

// اعداد زوج
// for (let i = 0; i <= 100 ; i += 2){
//   console.log(i)
// }

// //اعداد فرد
// for (let i = 1; i <= 100 ; i += 2){
//   console.log(i)
//   }

// for (let i = 0; i <= 10; i++){
//   console.log(` گل شماره ${i}`)
// }

// // // برای فهمید طول یک ارایه از لنقث=طول استفاده می شود به مثال زیر توجه ک
// let names = [23 , true , "mammad" , NaN , undefined , null]
// console.log(names.length)

// for (let i = 0; i < names.length ; i++){
//   console.log(names[i] , typeof names[i])
// } // به این  عملیات می گویند پیمایش روی ارایه با حلقه فور

//متد
// for of 👇
// let name = "hassan"
// for (const char of name){
//   console.log(char)
// }
// for (const char of name){
//   document.write(char)
// }

// for in 👇
// let user = {
//   name : "mammad",
//   age : 15,
//   car : "BMW",
// };
// for (const key in user){
//   console.log(user[key])
//   console.log(key)
// }

// for ofپیمایش روی رشته های متنی و ارایه ها
// for inجهت پیمایش روی ابجکت ها

/*
42--break and continue
*/

// while?  تا زمای که
//https://www.w3schools.com/jsref/jsref_while.asp
// let coo = [1 , 2 , 3 , 4 , 5]
// for (let i = 0; i < coo.length ; i++){
//   console.log(coo[i])
// }

//width while 👇

// let coco = 5;
// while ( coco > 0){
//   console.log(coco)
//   coco--
// }

//------------------------------------------------------

// do-while
// let coco = 5;
// do{
//     console.log(coco)
//    coco--
// } while(coco > 0)

// let index = 0 ;

// do {
// console.log(index);
// index++;
// } while(index < 12)

// let man = 0 ;
// do{
//     console.log(man)
//     man++
// }while(man > 10)

//تفاوت حلقهdo-while   و  while
//حلقه do-whileدر صورت نادرستی شرط یکبار هم که شده کد ها رو اجرا می کنه برعکس حلقهwhile

//     //function  👇
// function numbers(){
//     let a = 5;
//     let b = 10;
//     let result = a + b
//     console.log(result)
//    }
//    numbers()

// function clickkk() {
//     console.log("Clicked successfully")
// }

//function===تابع
// function(   parameter  ){ }

// function   youname(name , gender){
//     if(gender === "female"){
//         console.log("welcome to our site mr " + name)
//      }else{
//         console.log("welcome to our site miss  " + name)
//     }
// }
//     //and width

//     let massege = gender === "female" ? "welcome to our site mr " + name: "welcome to our site miss  " + name;
//     console.log(massege)
// }
// youname( "Mohammad" ,  "female" )

// function sum(a , b){
//     console.log(a * b)
// }
// sum(10 , 10)

// اگر مقدار ندیم به یک پارامتر می تونیم مقدار  پیش فرض برر اون تنظیم کنیم مثل مثال زیر
// function sum(a = 8 , b = 5){
//     console.log(a * b)
// }
// sum()

//برای گرفتن ادامه  پارامتر از رست استفاده می شود
//با رست اپراتور می تونه باقب مانده کل فانکشن را  را در ارایه می ریزه
//می تونی اسم رست رو هر چی بزاری
// function  noo(a , b , ... rest){
//     console.log(a + b)
//     console.log(rest)
// }
// noo(5, 6 , 6,8 ,3)

// function  noo(a , b , ... rest){
//     let total = a + b;
//     for (let num of rest){
//         total += num;
//     }
//     console.log(total)
// }
// noo(5, 6 , 6,8 ,4)

//......,,,,,....................,,,,,,,,,,,,,,,,,,,,,,,,,,...................................,,,,,,,,,,,,,,,,,,,,,,,,

//فانکشن ها یک کلمه کلیدی دارند به نام ریترن
// function getage(birthday){
//     let age = 1404 - birthday
//     console.log(age)
// }
// getage(1391)
// //حالا این مثال بالا را در پایین با ریترن انجام می دهیم
// function getage(birthday){
//     let agee = 1404 - birthday;
//     return agee;
// }
// let all = getage(1391);
// console.log(all); // 13

//نوع دوم فانکشن ها
//در این نوع فانکشن می توان به اون اسم نداد ولی باید ان را در یک متغیر  ساخت
// let foo = function(){
//     console.log("hello mammad")
// }
// foo()

//arrow function
// const getage1 = () => {
//     console.log("gholam")
// }
// getage1()

// function getage(birthday){
//     let age = 1404 - birthday
//     console.log(age)
// }

// const getage1 = (birthyear) => {
//     return 1403 - birthyear
// }
// console.log(getage1(1391))

//فانکشن خود صدا زننده
//برای استفاده کردن فانکشن خود صدا زننده فانکشن را در پارانتز می اندازیم
// (function (){
//     console.log("hellooo")
// })()
// //با ارو فانکشن
// !( () => {
//     console.log("hellooo")
// })()

//تبدیل عدد به رشته
// let number = 10;
// let all = String(number);
// console.log(number)
// console.log(all)
// let all1 = String([1,1,2,3,4]);
// console.log(all1)
// let all2 = String(true);
// console.log(typeof all1)
// console.log( all1)214÷3
// console.log(typeof  all2)
// //یا با تو استرینگ هم می توان این کارا را کرد
// //ولی در تو استرینگ نمی توان نال و انیفیند را به استرینگ تبدیل کرد
// let all4 = number.toString();
// console.log(typeof all4)

// let update = number + "";
// console.log(typeof update)

//تبدیل عدد  به بولین و تبدیل بولین به عدد
// let boll = false;
// let update = Number(boll)
// console.log(update)
// console.log(boll)
// console.log(typeof update)
// console.log(typeof boll )

// let boll = true;
// let update = Number(boll)
// console.log(update)

// let number = 20;
// let update = Boolean(number)
// console.log(typeof update)
// console.log(typeof number);

// //کوتاه ترین روش برای تبدیل نامبر به بولین
// let number1 = 20;
// let update1 = !!number;
// console.log( update)
//let number = 20;
//!number //  =>  false
//let number = 20;
//!!number //  =>  true

// let number = "10";
// let update = Number(number);
//or
//با گذاشتن اون پلاس جاوا اسکریپت اون را عدد تبدیل می کند
// let update = +number;
// console.log(25 + update)
// console.log(25 + +number)
//دومین متد برای تبدیل رشته به نامبر
// let update = parseInt(number);
// console.log(25 + update)
//وسومین
// let update = parseFloat(number);
// console.log(25 + update)
//وقتی در بالا نامبر یک حرف خاصی مثل دلار قرار دهیم وقتی لاگ می گیریم به ارور می خوریم
//ولی وقتی از پارس اینت و پارس فلوت استفاده می کنیم با حروف هم جمع می کند و اروری نمی دهد
// let nomre = "55.9";
// let update = parseFloat(nomre);
// console.log(update)
//اگر با پارس اینت این کار بالا را می کردیم فقط عدد صحیح می داد ولی پارس فلوعت اعداد را با ممیز می دهد

//متد های استرینگ
// //charAt
// let string = "i am mohammad"
// console.log(string.charAt(-1))
// console.log(string[30])
// console.log(string.at(-5))
// console.log(string.charCodeAt(6))

// //وقتی از چرات استفاده کنیم و ایندکس 30 را لاگ بگیریم دو تا باز و بسته لاگ می گیره ولی وقتی از براکت استفاده کنیم اندیفیند می ده
// console.log("M".charCodeAt())

//trim👇
// let phonnumber = "    990238274            ";
// let neww = phonnumber.trim();
// let neww = phonnumber.trimStart();
// console.log(neww)

//upperCaseText  and  lowerCaseText 👇
// let string = "a Programmer";
// let upperCaseText = string.toUpperCase();
// let lowerCaseText = string.toLowerCase();
// console.log( upperCaseText);
// console.log( lowerCaseText);

// let email = "      bnhjgyhbMM@gmail.com    ";
// let update = email.toLowerCase().trim()
// console.log(update)

//ووووووووووووو...............................ووووووووووووووووووووووووووو............................ووووووووووووووووووووووووووو.......

//indexof 👇
//در متد چرات شماره را می دادیم و حروف رامی گرفتیم ولی در ایندکس اف حرف را می دهیم وشمارش را می گیریم
// let text = "javascript";
// console.log(text.indexOf("a"));
// console.log(text.at(-2));
// console.log(text.lastIndexOf("a"));
// // //includes
// console.log(text.includes("java")); //==true
// console.log(text.includes("java",0));  //در دومین وردی می گه که از ایندکس0 به بعد دنبال جاوا بگرد
// let email = "mohammad2012@gmail.com";
// let isValidEmail = email.includes("@");
// console.log(isValidEmail)

//startWidth  👇
// let link = "https://webyboy.com";
// let start = link.startsWith("https")
// let end = link.endsWith("https")
// console.log(start)
// console.log(end)
// //endWidth
// let image = "ofld.pnmg";
// let im = image.endsWith(".png");
// if (im){
//     console.log("ok")
// }else{
//     console.error("not not not!!")
// }

//slice and substring  👇
//string.silce(start , end)
//و همچنین منفی پذیره
// let text = "i love soufi learn";
// console.log(text.indexOf("l"))
// let update = text.slice(0 , text.indexOf(" "))

// let update = text.slice(text.lastIndexOf(" "));
// console.log(text.lastIndexOf("e"))
// console.log(update)

// const checksimcart = (phoneNumber) => {
//     let firstOfNumber = phoneNumber.slice(0, 4)
//     if(firstOfNumber === "0914"){
//         console.log("your simcart is hamrah aval")
//     }else if(firstOfNumber === "0930"){
//         console.log("your simcart is irancel")
//     }
// }
// checksimcart("0914821111")
// checksimcart("0930821111")

//substring 👇
//فرق این دو در این است که ساب استرینگ مثل اسلیس منفی نمی پذیرد
// let text = "javascript";
// console.log(text.slice(-4))
// console.log(text.substring(-4))

//replace ==عوض کردن کلمه با کلمه 👇
//برای اینکه در یک جمله چند کلمه مشابه را عوض کنیم از رپلیس ال استفاده می کنیم
// let text = "this is school and school";
// let result = text.replace("school" ,  "home");
// let result1 = text.replaceAll("school" ,  "home");
// console.log(result)
// console.log(result1)
//
// let name = " mohammad mohammad";
// let update = name.replace(/mohammad/gi ,"erfan")
// console.log(update)

//toLocaleString===عدد ها را 3تا 3تا از هم جدا کردن👇
// let price = "20000000";
// let updatedprice = Number(price).toLocaleString("fa-IR");
// console.log(updatedprice)
// console.log(price)

//padstart and padend===  👇
// let text = "front end";
// let result = text.padStart(15 , "-")
// let result = text.padEnd(15 , "-")
// console.log(result)
// text.padstart( length ,  --)

// let hours = 3;
// let update = hours.toString().padStart(2 , 0);
// console.log(update)
//
// const cards = (number) => {
// let snumber = number + " ";
// let lastnumbers = snumber.slice( -5);
// // return lastnumbers.padStart(snumber.length , "*")
// console.log( lastnumbers.padStart(snumber.length , "*"))
// }
// cards(6219861953066601)
// let cree = cards(6219861953066601)
// console.log(cree)

//splite===نقسیم کردن در درون ارایه  👇
// let text = "i am programmer";
// let splitted = text.split(" ");
// console.log(splitted)
//
// let fruites = "banana , apple, orenge";
// let update = frutes.split(",")
// let update = frutes.split(",",2)  //یعنی رشته رو جدا می‌کنه ولی فقط دو قسمت اول رو به صورت آرایه می‌ده
// console.log(update)
// //
//شمردن تعداد کلمات با اسپلیت
// let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloribus eaque veritatis eligendi maxime provident qui vel repellendus. Dolor harum sequi commodi excepturi autem labore ratione rem vitae fuga quaerat."
// let oo = text.split(" ")
// console.log(oo)
//
//tofixed 👇
// let price = 3.14435234;
// let result = price.toFixed(2)
// console.log(result)
//
//isInteger===محاسبه کردن عدد ببرای اینکه عدد صحیح است یا نه  👇
// let result = Number.isInteger(250)
// console.log(result)

//توجه توجه  !!!   از اینجا به بعد دیگر ازعلامت  👇 استفاده نخواهد شد . به دلیل زیاد بودن کد ها .

//مروری بر آرایه ها

//دو روش برای ساخت آرایه ها که روش اولی پیشنهاد می شود
// const array = [1,3,5,2,8,6];
// const array1 = new Array(1,3,7,5,0);
// console.log(array)
// console.log(array1)

//length
// const array2 = [1,3,5,2,8,6];
// console.log(array2.length)
// //index
// console.log(array2[0])
// console.log(array2[array2.length - 1])
// //تعغیر دادن عنصر ارایه
// array2[3] = "mohammad"
// console.log(array2)

//پیام خوش امد گویی دانش اموزان کلاس
// let student = [ "mohammad" , "hassan" , "erfan" , "reza"];
// for(let i = 0; i < student.length; i++){
//     console.log("welcome to the class " + student[i])
// }

//متد های آرایه
// let user = ["mohammad" , "erfan" , "farzad"]
// console.log(user)
// //push?اضافه کردن عنصر به اخر ارایه ها
// user.push("amirreza")
// console.log(user)
// //اگر نتیجه پوش کردن را لاگ بگیریم طول ارایه نهایی واپدیت شده را برمی گردونه
// //حذف کردن عنصر از اخر ارایه با پاپ
// user.pop();
// console.log(user);
// let result = user.pop();
// console.log(result)
//اگر از متد پاپ روی ارایه ای استفاده کنیم  و نتیجه رو داخل متغیری بندازی همون ارایه ای را که حذف کرده برمی گردونه
//
//
//اضافه کردن عناصر به اول ارایه با شیفت و انشیفت

// let user = ["mohammad" , "erfan" , "farzad" , "erfan"]

// console.log(user)
//un shift===به اول ارایه میاد چی زی اضافه می کند
// user.unshift("ali")
// console.log(user)
//shift===از اول ارایه می یاد چی زی زا حذف می کند
// user.shift("ali")
// console.log(user)
//
//جستجو در ارایه با ایندکس اف
// let indexx = user.indexOf("erfan")
// console.log(indexx)
// let indexx1 = user.lastIndexOf("erfan")
// console.log(indexx1)
// //
// //includs
// let isExist = user.includes("erfan")
// console.log(isExist)
//
//find === میاد خودش آن چیزی که می خواد را می گیره
// let numbers = [10 , 4 ,7 ,1 , 87 , 44];
// let newnumbers = numbers.find((numbers) =>  numbers > 40);   //== 87
// let newnumbers1 = numbers.findIndex((numbers) =>  numbers > 40);
// console.log(newnumbers)
// console.log(newnumbers1)
//می توان مثال های بالا رابا findlastindex , findlast
//
//filter   //متد هایی که بعنوان ورودی فانکشن می گیرند به اون کالبک فانکشن می گویند
// let number = [20 , -33 , 780 , -10 , -45 , 80]
// number.filter((num) => {
//   if (num > 0) {
//     console.log(num);
//   }
// });

//اگر بخواییم در صورت ارایه جواب را بگیریم  باید اون را در یک متغیر بزاریم والبته ریترن کنیمش
// let number = [20 , -33 , 780 , -10 , -45 , 80]
// const mm = number.filter((num)=> num > 0)
// console.log(mm)
//
// number.filter(function(num , i){
//         console.log(`${i}: ${num}`)
// })
//
// let nams = ["mohammad reza", "ali reza" , "reza " , "soufi" , "amir reza"]
// let filtered = nams.filter((num) => num.length > 5)
// console.log(filtered)
//متد فایند وفیلتر مثل هم هستند ولی متد فاید اولین ایتمی که شرط ما رو صدق می کند رو برمی گردونه  ولی متد فیلتر روی تمام ایتمم های ارایه اجرا می شه وهر کدوم از ایتم ها که شرط ما را صدق کنه رو برمی گردونه
//

//تمرین های حرفه ای تر با متد فیلتر
//
// let students = [
//     {name: "mohammad" , score: 99},
//     {name: "reza" , score: 50},
//     {name: "erfan" , score: 67},
//     {name: "hesam" , score: 33},
//     {name: "amir" , score: 24}
// ]
// students.filter((stu) => {
//      if (stu.score > 50){
//         console.log(`${stu.name} is passed width ${stu.score} score`)
//      }
// })
//
//برای اینکه در درون ارایه ها باشن اول ان را در درون یک متغیر می اندازیم و بعد باید ریترن کنیم داخلش را
// let rr =students.filter((stu) => {
//     //  return
// })
// console.log(rr)
//
//
// let laptop = [
//     {model: "hp" , price: 32000000},
//     {model: "surface" , price: 87000000},
//     {model: "dell" , price: 45000000},
//     {model: "mackbook" , price: 105000000},
//     {model: "asus" , price: 19000000},
// ]
// laptop.filter((lop) => {
//     if(lop.price > 50000000){
//         let formatt = lop.price.toLocaleString();
//         console.log(`${lop.model}: ${formatt}`)
//     }
// })

//
//!!!!!!!!foreach!!!!!!!!
// با حلقه فور     1
// let numbers = [1 , 2, 4, 6 ,3]

// for(let i = 0; i < numbers.length ; i++){
//     console.log(numbers[i])
// }

//2       with forEach
// numbers.forEach((num , i , array) => console.log(num , i , array))
// numbers.forEach((num) => console.log(num ))
// numbers.forEach((i) => console.log(i));
// numbers.forEach((array) => console.log(array));

//متد فورایچ سه تا ورودی می گیرد که بالا از چپ نوشته شده و البته فور ایچ از بریک وکانتینیو پشتیبانی نمی کند
//
// let sum = 0;
// numbers.forEach((num) => {
//     sum += num
// })
// console.log(sum)
//
//
// numbers.forEach((num) => {
// if( num % 2 === 0){
//     console.log( `${num}  is even`)}
// else{
//     console.log( `${num}  is odd`)
// }
//یک متد دیگه مثل فور ایچ هست که همون کار فرو ایچ را انجام می ده که اسمش متد مپ است
//اگر فورایچ را درون متغیری بندازی و اون را لاگ بگیری اندیفیند می ده حتی نام را به جای لاگ ریترن هم کنی باز هم چیزی جواب نمی دهد
//تنها تفتوت مپ با فوایچ اینه که ضعف بالا را رفع می کند به مثال پایین دقت کنید
// //فورایچ نتیجه ای را ریترن نمی کنداما مپ اجازه می دهد نتیجه ای را ریترن بکنی
// let result = numbers.map((num)=>{
// return num
// })
// console.log(result)

//
// let numbers = [1 , 2, 4, 6 ,3]

//  let result = numbers.map((num)=>{
// return num * 2
// })
// console.log(result)
// console.log(numbers)
//ولی با فور ایچ جواب نمب دهد
// numbers.map(function(num) {
//     console.log(num * 2);
// });

//
// let dollors = [100 , 245 , 700 ,10 ]
// let dollorrate = 120000
// let dollorstotoman = dollors.map((dollor)=>{
//     let springprice = (dollor * dollorrate).toLocaleString()
//     return springprice
// })
// console.log(dollorstotoman)

//
//
//reduce
// array.reduce((acc==مجموع نتیحه درون اکتو می نسینه , current =مساوی است با تکت ک اناصار بالا)=>{},0)


// console.log(array)
//
// const array1 = [2, 4, 6, 3,9]
// let sum = array1.reduce((acc , current) => {
// return acc + current
// } , 0)
// console.log(sum)
// console.log(array1)
//
// const array1 = [2, 4, 6, 3,9]
// let sum = array1.reduce((acc , current) => {
// acc.push(current * 2)
//     return acc
// } , [])
// console.log(sum)
//
//
// let cart = [
//     {name:  "T-Shirt" ,  price: 20 , guantity : 2},
//     {name:  "troasers" ,  price: 45 , guantity : 1},
//     {name:  "songlasses" ,  price: 4 , guantity : 2},
//     {name:  "cape" ,  price: 33, guantity : 10}
// ]
// let totalCost = cart.reduce((total , product) => {
// let result = product.price * product.guantity;
// return total + result
// } , 0)
// console.log(totalCost)
//
//
//every and Some
//some
//در سام اگر شرط را یک ایتم هم رعایت کند اجرا می شود
// let ages = [5 ,3 ,7 ,6]
// let result = ages.some((age) => age > 18)
// console.log(result)

// // Every
// let ages = [24,22,36,17]
// let drink = ages.every((age) => age > 18)
// console.log(drink)
// //
//
//Sort===به معنای چیدن مثل چیدن براساس حروف الف با..
// first example.
// let names = ["hamed" , "asee" , "magid" , "behnam"  , "akbar"]
// names.sort()
// console.log(names)

//two example
// let numbers = [30 ,2 ,80 ,20 ,14]
// numbers.sort()
// console.log(numbers)
//در مثال بالا  متد سورت به اول اعداد نگاه می کند نه به کل عدد ها به چینش عدد ها در مثال بالا دقت کنید!! برای همین در پایین این کار را بکنیم
// let numbers = [30 ,2 ,80 ,20 ,14]
// numbers.sort((a , b)=> a - b) //برای چیدن از بزگ به کوچک باید نوشت بی منهای ای یعنی دو تا دوتا مقایسه می شوند
// console.log(numbers)
//
//
//reverse
// let numbers = [1 ,4, 7, 2 , 3]
// numbers.reverse()
// console.log(numbers)
//برای کپی گرفتن از ارایه
// const copynun = [...numbers]
// console.log(copynun)
//به جای کپی گرفتن از ارایه می توان به راحتی از توسرتوت استفاده کرد تا در اراه اصلی تعغیری ایجاد نکنیم
//tosorted
// let sortet = numbers.toSorted()
// console.log(sortet)
//پیشنهاد سوفی استفاده از توسورتت بجای سورت
//toreverse
//پیشنهاد سوفی استفاده از تو ریورز به جای ریورز
// let word = ["a", "b","c","d"]
// let mm = word.toReversed()
// console.log(word)
// console.log(mm)
// پس به جای استفاده از اون دوتا بالا پیشنهاد پیشنهاد می شود از این دوتایی که اولشون تو هست استفاده کنیم
//تفاوت اصلیشون فقط اینه که این دو تای که الان دیدیم ارایه اصلی رو تعغیر نمی دهند

//
//در ارایهSliceمتد
//sintax ==> array.Slice(start , end)
// const user = ["ali" , "majid" ,"sara" , "hashem"]

//اولین کاربرد
// برای اینکار باید ورودی های متد را خالی بگذاریمsliceکپی کردن ارایه با
// let copyarray = user.slice()
// console.log(copyarray)
//دومین کاربرد
// let slicedUserd = user.slice(1 , 2)
// let slicedUserd2 = user.slice(-4, 2)
// console.log(slicedUserd)
// console.log(user)
// console.log(slicedUserd2)
//اگر یک ورودی فقط بدهیم تا اخر ارایه که ادامه دارد برش می دهد
//و البته این متد منفی هم می پذیرد مثل مثال بالا
//
//برای اینکه نصفه به بعد ارایه را بگیرم از کد های پایین اینجوری استفاده می شود
// let firsthalf = user.slice(0 ,  user.length / 2)
// console.log(firsthalf)
//و برای گرفتن نصفه ی دوم از کد پایین استفاده می شود
// let lasthalf = user.slice(user.length / 2)
// console.log(lasthalf)
//یا با این هم می شود
// let lasthalf1 = user.slice(2)
// console.log(lasthalf1)
// console.log(user)
//
//
//splice ===حذف و اضافه وجاگزین کردن مقادیر ارایه
//Sintax ==> array.splice(start , delete  ,+ , +)   //از دومین ورودی به بعد دیگه هر چی بنویسی به ارایه اصافه می کند
//و البته این متد روی  خود آرایه تعثیر می گذارد و منفی می پذیرد
// let fruits = ["Apple" , "Banana" , "Mango" , "Grape"]
// fruits.splice(1 , 2 , "+" )
//اگر مقدار ورودی دوم را ندهیم از مقدار اولی که گرفته تا اخر ارایه همه چیز را حذف می کنه
// console.log(fruits)
//
// const numbers = [1 , 2,  4 , 5 , 6]
// numbers.splice(2 , 0 , 3 )
// console.log(numbers)
//
//
// const numbers2 = [1 , 2,4 ,5 ,6]
// numbers2.splice(0 , numbers2.length)
// console.log(numbers2)
//
//چند روش برای اینکه ارایه اصلی را  تعغیر ندهیم
//sliceاولین روش کپی گرفتن از ارایه اصلی با
// let fruits = ["Apple" , "Banana" , "Mango" , "Grape"]
// const newfruit = fruits.slice()
// newfruit.splice(1 , 2)
// console.log(newfruit)
// console.log(fruits)
//دومین روش که سوفیهم پیشنهاد داد استفاده از تواپلیس که به جای اسپلیس هم پیشنهاد می شود
// let fruits2 = ["Apple" , "Banana" , "Mango" , "Grape"]
// let tospliceed = fruits2.toSpliced(1 , 2)
// console.log(tospliceed)
// console.log(fruits2)
//
//
//Concatمتد
//Concat ==> Mix Several  Array Width Together
// const word = ["a" , "b" , "c"]
// const numbers  = [1 ,2 ,3]
// const num  = [143,333 ,44]
// let finalarray = word.concat(numbers , num)
// console.log(finalarray)
//
//Flatمتد
// let arraytoarray = [1 , 2, 3, [4 , 5 ,[6]], 7 ,[8 , 9]]
// let update = arraytoarray.flat()
// let update1 = arraytoarray.flat(2) // وقتی عددی مثل 1 بدهیم می گه که همش را در 1سطح خارج کن مثل در درو یک ارایه اریه و ارایه باشد باید اون موقعه مثل گفت در 2 سطح
// let update3 = arraytoarray.flat(Infinity)//اگر خیلی ارایه تودرتو داشته باشیم ولی ندونیم چند سطح هستن می تونیم از
// console.log(update)
// console.log(arraytoarray)
// console.log(update1)
// console.log(update3)
// console.log(arraytoarray)

//flatmap   قسمت 80

//at
// let letters = ["a" , "b" , "c" ,"d"]
// تفاوتشون در پااینه
// console.log(letters[-2])
// console.log(letters.at(-2))
//
// console.log(letters.at(-1))
//روش ساده برای مثال بالا که اخرین عنصر را می گیرد
// console.log(letters.at(-1))
//
//
//with  Sintax ==> array.with(index , value)
// let brand = ["sam"  , "apple" , "nokia"]
// let update = brand.with(0 , "samsung")
// console.log(brand)
// console.log(update)
//
//
/////////////////////////////////////////////////////////////////////
//مرور splite و برای تبدیل متن به ارایه
// let word = "javascript my javascropt"
// console.log(word.split(" "))

// split → مخصوص string → خروجی آرایه.
// slice → فقط بُرش → داده اصلی تغییر نمی‌کنه.
// splice → حذف/اضافه/جایگزین → داده اصلی تغییر می‌کنه

// const m = [",," , "jj" , "jjuhhjb" , "j"]
// const n = m.splice(0 , 1)
// const v = m.slice(0, 1);
// console.log(m)
// console.log(n)
// console.log(v);

//join
// let fruits = ["apple " , " banana " ," pineapple"]
// let result = fruits.join("-")
// console.log(result)
//
//
// let fruits1 = "apple banana pineapple"
// let ssd = fruits1.split(" ")
// // console.log(ssd)
// let sp = ssd.map((word)=>{
// return word[0].toUpperCase()
// })
// console.log(sp.join(""))

//
// let revers = (text) => {
//    let result = text.split(" ").reverse().join(" ")   //برای تبدیل متنمان به ارایه با توجه به فاصله های خالی
//    console.log(result)
// }
// revers("hello world")
// revers("mohammad akbari")

//
//
//متد های ابجکت ها🤐

// keys , values , entries  👈👈
// let person = {
// name: "mohammad",
// height: 170,
// car: "bmw"
// }

// استفاده می شود Object تعریف کردن و ایجاد یک متد روی ابجکت باید بیایم اول از کلمه کلیدی
// let keys = Object.keys(person)
// console.log(keys)
// let values = Object.values(person)
// console.log(values)

// console.log(keys[0] + " => " + values[0])
// console.log(keys[1] + " => " + values[1])
// console.log(keys[2] + " => " + values[2])
//entriesولی اینجوری که نمیشه هی اینو بنویس اونوقت دهنمون سرویس می شه پی باید بریم سروقت سومین یعنی
// const data = Object.entries(person)
// console.log(data)

// data.forEach((item) => {
// console.log(item[0])   //وقتی بگیم ایندکس صفر کی ها را لاگ می گیرد و وقتی بگیم یک ولیو ها را لاگ می گیره و اگه فقط ایتم بنویسیم هر دو را لاگ می یره
// console.log(item[0] + " ☞☞ " + item[1])
// })
//
//
//اضفه کردن وحذف کردن در ابجکت ها
// let person = {
//     name: "mohammad",
//     height: 171,
//     car: "bmw"
// }

// Object.seal(person)  //یک متد است که شیء را قفل می‌کند به‌طوری‌که نتوانی ویژگی جدید اضافه یا حذف کنی،
// console.log(person)
//width freaze
// Object.freeze(person)
// console.log(person)
// console.log(Object.isFrozen(person))
// seal() ⇒ قفل در و پنجره رو می‌بنده، ولی وسایل داخل خونه رو می‌تونی جابه‌جا کنی 😄
// freeze() ⇒ هم قفل در و پنجره رو می‌بنده، هم وسایل داخل رو میخ می‌کنه که تکون نخورن 😆

// console.log(Object.isSealed(person))  // کار می کند روی این ابجکت یا نه از این متد روبرو استفاده می کنیمseal  برای اینکه بفهمیم

//freaze
//این مت هم مثل سیل هست ولی تنها تفائتش اینه که وقتی در ابجکت چیزی را می خواهیم تعغیر دهیم با سیل تعغیر می کند ولی با فریز نه
// person.name = "reza"
// console.log(person)

// person.laptop = "surface"  //  اضافه کردن
// delete person.height; //  حذف کردن
// console.log(person)
//حالا برای اینکه نزاریم در ابجکت چیزی تعغیر نکنه باید از متد های زیر استفاده کنیم
//الته باید اول این را قرار دهیم
// Object.seal(person)
// console.log(person)

//freaze  ,  sealهر دو را می توان در ارایه ها هم استفاده کرد ولی در ارایه ها خطا می دهد که مثلا این ارایه فریز شده شما ووو

//
//this
// console.log(this)

// this.onclick = ()=>{
//     console.log("clicked")
// }

//در اچتبامال در باتن
// function changeColor(element){
//     console.log("cliiiiick")
//     element.style.background = 'black';
//     element.style.color = 'white'
// }

///
//استفاده از دیس و فانکشن در ابجکت
// let person = {
//     name: "mohammad",
//     lastname: "akbari",
//     information : function(){
//         return `hi my name is ${this.name} ${this.lastname}`
//person.name or this.name
//وقتی از فانکشن در ابجکت استفاده کنیم بهتر و اوصولی تر است از دیس استفادهه کنیم به جای بالای
//ولی دقت کنید وقتی در بالا به جای فانکشن معموولی ار اریفانکشن استفاده کنیم اندیفیند می ده
//     }
// }
// console.log(person.information())
//
//
// let person = {
// firstname: "mohammad",
// lastname: "akbari",
// }
// function result(firstname , lastname){
//     console.log(`my name is ${firstname} ${lastname}`)
// }
// result("Mohammad" , "Akbari")
//و برای اینکه مقدار پارامت را از ابجکت ها بگیریم از مثال پایین استفاده می شود
// result(person.name ,  person.lastname)
// ولی من می خوام از ورودی ها نگیرم و مستقیم با دیس بگیرم برای این کار با مثال زیر کار می کنیم
// function result2(age){
// console.log(`my name is ${this.firstname} ${this.lastname} and i am ${age} years old`)
// }
// result2.apply(person , [15])   //apply  وقتی فانکشن  ما درون ابجکت قرار داره می توانیم به راحتی با دیس چیز های داخل ابجکت را بگیریم ولی وقتی فانکشن ما بیرون از ابجکت قرار داره نمی تونیم پس بهخاطر همین از اپلای استفاده می کنیم وقتی از اپلای استفاده می کنیم می تونیم به راحتی از دیس اتفاده کنیم ولی باسد با اپلای بگیم که کدوم ابجکت را می خواییم     وبرای ورودی خود فانکشن هم وقتی از اپلای استفاده می کنیم باید از براکت استفاده کنیم   و   در جمع بندی ما با متد اپلای می تونیم یک فانکشن خارجی را به یک ابجکت وصل کنیم
// console.log(person)
// result2.call(person , 15)  //call   // در کال می توان پارامتر را داد مثل سن و جواب هم می دهد ولی اوصولیتر است از کال برای این کار استفاده نکنیم ولی تنها تواوتشون اینه که نباید جواب پارامتر اول به بعد را در کروشه قرار داد
//پیشنهاد سوفی استفاده ا ز  کال

//bind
// let get = result2.bind(person ,15)
// get()
//می تونیم خیلی ساده با
// result2.bind(person ,15)()
//این هم مثل دوتا بالا هست ولی نحوهی نوشتارش فرق می کند

//Math📊📉📈متد های ریاضی
// console.log(Math.PI)   //عدد پی
//round
// console.log(Math.round(3.14))   //رند کردن اعداد
//ceil
// console.log(Math.ceil(3.14))  //تمام اعداد  را که باشه بالاترین عدد رند می کند
// floor
// console.log(Math.floor(3.88))  //برعکس سیل فلور هر چقد اعشارش باشه رو به پایین باشه گرد یا همون رند می کنه
//trunc
// console.log(Math.trunc(3.14))  //این متد هم فقط و فقط اعشار را حذف می کند و عدد صحیح اول خودمان را می دهد

//تابع (Math.pow(x , y در جاوااسکریپت، عدد اول به عنوان پایه و عدد دوم به عنوان توان در نظر گرفته میشن
// console.log(Math.pow(3 , 3))

//تابع (math.sqrt(x در جاوااسکریپت، از عدد داخل پرانتز جذر میگیره یا همون رادیکال به فورجه 2
// console.log(Math.sqrt(25))

//تابع (Math.abs(x عدد داخل پرانتز رو با علامت مثبت برای ما برمیگردونه))
// console.log(Math.abs(-13))

//sign
// console.log(Math.sign(-3))  //اگر منفی بدهیم منفی یک اگر صفر بدیم صفر واگر بزرگتر از 0 بدسم  1 می ده

//کوچک ترین عدد داخل پرانتز را از بین بقیه اعداد انتخاب میکنه و برای ما بر میگردونه.
// console.log(Math.min(0, 300, 35, 2, -8, -100))

//بزرگ ترین عدد داخل پرانتز را از بین بقیه اعداد انتخاب میکنه و برای ما بر میگردونه
// console.log(Math.max(0, 300, 35, 2, -8, -100))

// let numbers = [5 , 76 ,90 ,110 ,19]
// let minnumber = Math.min(...numbers)
// console.log(minnumber)

//random
// let result = Math.random()  //اعدادی می دهد بین صفر تا1
// console.log(result)
//برای اینکه عددی خودمان بدبم تا در بین ائن جواب بدهد این مثال پاایین را ببینید
// let result = Math.random() * 6;
// console.log(result)
//برای حذف اعشار
// let result = Math.floor(Math.random() * 6) +1   //برای اینکه خود عدد 6را هم شامل شود پلاس یک را می گذاریم/
// console.log(result)

// let changebackground = () => {
//     let color = ["red" , "blue" , "pink" , "dark" , "green" , "red"]
// let random = Math.floor(Math.random() * color.length)
// console.log(color[random])
// document.body.style.background = color[random]
// }
// changebackground()

//array destructuring
// let numbers = [1 , 2 , 3]

// let a = numbers[0];
// let b = numbers[1];
// let c= numbers[2];
// console.log(a , b  ,c)

// const [a ,b ,c] = numbers
// console.log(a , b , c)

// const person = ["Mohammad" , 14 , "meshginshahr" , [57 , 171]]
// let [name , , city , [weight, height]] = person  //وقتی بخاییم دومی را ندیم اینجوری می کنیم ب هروبرو نگته کنید
// console.log(name , city , height)

// let programmer = {
//     name: "khar",
//     ss :["html" , "css" , "bootstrap"]
// }
// let [a , b ,c , d="not"] = programmer.ss    //برای اینکه مقدار  پیش فرض دهیم در وبرو به دی نگاه کنید
// console.log(a ,b ,c ,d)

//object destructuring
// let product = {
//   name: "laptop",
//   quantity: 2,
//   isstock: false,
//   opening: { open: "07:00", close: "10:00" },
// };
// let {
//   name,
//   quantity = 4,
//   isstock,
//   opening: { open, close },
// } = product;
// console.log(name, quantity, isstock);
// console.log(open);
//دو تا تفوت دستراکتور کردن ارایه ها با ابجکت ها اینه که
//   {}علماتی که برای ابجکت ها می زاریم کیلی برسزه
// [] و علامتی که برای ارایه ها می زاریم اسمش براکت هست
//و در ابجکت ها بر اساس باید کلید هاشون دستکرچک  کنیم ولی در ارایه ها فرق نمی کند چه می نویسی

//spread operator
// const numbers = [30, 40, 50];

//good way1✅
// let newnumbers = [10 ,20 , numbers]
// console.log(newnumbers.flat())
// console.log(numbers)

//good way2✅ spreed operator
// let newnumbers = [10 ,20 , ...numbers] //وقتی اون سه نقطه را بزاریم می ره توی ارایه و چیز های توی ارایه را می کشه میاره بیرون
// console.log(newnumbers)
// console.log(numbers)

//اضافه کردن یک ایتم جدید به ارایه ای که وجود دارد
// let friends = ["reza" , "ndj" ,"gmkkmk "  , "kgmmk"]

// const newfriends =  [...friends , "mmmmm"]
// console.log(newfriends)
// console.log(friends)

//shallow copy from array
// let copyfriends = [...friends]
// console.log(copyfriends)

//مرج کردن چندین ارایه با یک دیگر
//merge several array with  toghether
// let arr1 = ["html" , "css"]
// let arr2 = ["js" , "react"]

//راهی که پیشنهاد نمی شود
// let result = arr1.concat(arr2)
// console.log(result)

//راهی که پیشنهاد می شود
// let newarray = [...arr1 , ...arr2]
// console.log(newarray)

//
// let akbari = {
//   name: "mohammad",
//   lastname: "akabri",
//   car: 20
// }
// let updateakbari = {
//   ...akbari  ,   //برای اینکه محتوای داخل اکبری را در اپدیت اکبری بریزیم از اسپریداپریتور استفاده می کنیم
//     age: 14,
// }
// console.log(updateakbari)

//copy
// let copy = {...akbari}
// copy.car = 100;
// console.log(copy.car)   //کپی شده
// console.log(akbari.car)  // اصلی

///////////////////////////////////////////////////////////////////////////////////////////

// let numbers = [10 ,20 ,30 , 40 ,50 ,60]
// let [a , b , c] = numbers  // کنسترکچر کردن
// console.log(a ,b , c)  //ولی ما که نمی تونیم هرچی تو ارایه باشه بیاییم بنویسیم اونوقت خیلی زیاد می شه پس مییاییم از روش پایین استفاده می کنیم
//پس مییاییم از رست اپراتور استفاده می کنیم
// let [a , b , c, ...rest] = numbers    //و البته باید این رست اپراتور را اخر بندازیم مگر نه خطا می ده
// console.log(a ,b , c , rest)    //این رست شامل تمام ایتم های ارایه بالا می باشد بهجز این ایتم هایی که از قبل گرفته شده

//رست اپراتور در قالب ابجکت ها
// let person = {
//     name : "golam",
//     age : 2,
//     city : "south"
// }
// const {name , ...others} = person
// console.log(name )
// console.log(others)

//استفاده از رست اپراتور در فانکشن ها
// function sumNumbers(a ,b , c,v,b,){
//وقتی هی بیااییم اینجوری کنیم کد ناخوانا می شه و بد می شود هی بیاییم بنویسیم
// }
// sumNumbers(2 ,3, 2, 1, 4)

//ولی با رست اپراتور خیلی ساده تر می شود

// function sumNumber(...all){
// let sum = 0

//!!!!!!چند روش برای جمع کردن اعداد!!!!!!!!!
//  way 1
// for (let i = 0; i > all.length ; i++){
//     sum +=all[i]
// }
// console.log(sum)
// }

//  way 2
// for (let num of all){
//     sum += num
// }
// console.log(sum)
// }

//way 3  best way✅
// all.forEach(function(num){
//     sum += num
// })
// console.log(sum)

// }
// که پیشنهاد هم می شود به جای دو تای بالا از این استفاده شود way 3

// sumNumber(1 , 3, 5, 77, 37, 4)

//rest Operator and spread Operatorاموزش شناسایی دو تا متد بالای یعنی❗🔴
// let numbers = [10 ,20 ,30 ,40]
// let newNumbers = [...numbers , 50 ,60]
// console.log(newNumbers)
//به این موقعیت می گوینداسپرید اپراتور
//حالا می گی به کدوم موقعیت
//توی موقعیتی که این سه تا نقطه  بعد از مساوی به دست امده است❕❗
//یعنی این سه تانقطه اومده ارایه را شکافته  وایتم های داخلش را اورده انداخته توی یک ارایه جدید
//spread Operatorتوی همچین موقعیتی که می خوایی از یک ارایه کپی بگیری وایتم های داخلش را استخراج می کنی از  توی ارایه اصلی می گن

//رست اپراتور دقیقا برعکس اسپرید اپراتور است یعنی رست اپراتور در همچین شرایطی قبل از علامت مساوی می اید قبل از مساوس یعنی چی یعنی همون اری دیکچرانترینک کردن
// let numbers = [10 ,20 ,30 ,40]
// let [a,b, ...rest]  = numbers  // چون این سه تا نقطه  را قبل از مساوی گذاشتیم نیومده این 30 و 40 را از درونش استخراج کنه اومده درون یک ارایه جدیددی انداخته انو به ما داده
// console.log(a  ,b)
// console.log(rest)

//تفاوت اولشون اینه که علامت رست اپراتور قبل از مساوی
//وعلامت اسپریدبعد از مساوی

//دومین روش  ===  توجه به خروجی شه
// console.log(...numbers)  //اومده این اعداد را از درون ارایه استخراج کرده    اگه از داخل ارایه کشیدش بیررون  می تونی بهش بگی اسپرید اپراتور
//  console.log(rest)   //ولی توی موقعیت بالا اومده 30 و40 را داخل یک رایهای انداخته می گیم رست

//توی فانکشن
//  let sumNumber  = (...numbers  /*در اینجا این سه تا نقطه  گذاشتم این تبدیل به ارایه می شه اگر اون سه تا نقطه اعداد را در درون ارایه جمع اوری کرد می تونیم بگیم عملیات رست برعکس اگر ازش ارایه خارج کرد می گیم عملیات اسپرید انجام شده*/ ) => {
//     console.log(numbers)
//     let sum  = 0
//     numbers.forEach((num)=>( num+= sum))
//     console.log(sum)
//  }
// sumNumber(10 ,20 ,30)

//DOM
//به طور کلی دام یعنی هر کاری که تو با کد های اچتیامالی خودت  می تونه یه متن باشه می تونه یه عکس باشه و می تونه هرچی هرچی چیزی که با جاوااسکریپت می تونی بر علیهشون انجام بدی از تریق دام انجام می شود با دام وبسایت ما پویا  و زنده می شود.

//  htmlیعنی سند سند document
// console.log(document.documentElement); //documentelement دسترسی داشته باشیم می نویسیمhtmlبرای اینکه به کل سند
// console.log(document.documentElement);
// console.log(document.head)  //برای دسترسی به مثلا هدر  به مثال روبرو نگاه کنید
// console.log(document.title)
// document.title = "document object model"   //عوض کردن نام تیتلع وبسایت با دام

//اموزش اینکه چطور از طریق ایدی با دام به یک المنت در اچ یت امال دسترسی داشته باشیم
//اول باید تگ پی در اچ تی ام ال را فعال کنیم
//هدف ما اینه که اون تگ پی رابگیریم و بهش دسترسی داشته باشیم

//با ایدی      get Element By Id
// let textElementById = document.getElementById('text')   //و بعد از  نوشتن ان باید باید در درون پارانتز اسم اید را در تک کوتیشن یا دبل کوتیشن بزاریم  getElementByIdبرای دسترسی داشتن به یک المنت با ایدی باید بنویسیم
// console.log(textElementById)

//با کلاس    get Element By class name
// let textt = document.getElementsByClassName("text")   //getElementsByClassNameدر کلاس هم مثل کار های بالا را می کنیم و مثلا در درون تگ کوتیشن ودبل کوتیشن می زاریم ولی باید اینجا در کلاس گرفتنش بنویسیم
// console.log(textt)
//به ما می دهد HTMLCollectionدر کلاس ها برعکس ایدی یک
//یعنی مجموعه المنت ها یا به طور ساده یعنی تمام چیز هایی که این کلاس ی که گرفتیم با دام را دارند یا یعنی تمام المنت هایی که اینجور کلاس را دارند HTMLCollection
//اگر چند تا کلاس مشابه داشتیم و خواستیم فقط یکیش رالاگ بگیریم با کلاسنام میایام می گیم چون با کلاسنام در ارایه می دازه   پس میایم می گیم ایندکس مثلا صفرم را بگیر در پایین نگاه کنید مثل این
// console.log(textt[0])

//با نام خود المنت ها
// let name = document.getElementsByTagName("p")
// console.log(name)
//در تگ نام هم مثل کلاس میاد در درون  جواب را در درون اچتیامال کاکشن می ذاره پس می تونیم بگیم مثل بالا ایندکس 1  یا0 و و را بگیر

//querySelectorیه روش ساده هست برای کلاس  ها و ایدی ها که اسمش

//با کلاس
// let textclass = document.querySelector(".text")  // فرق این با اون سه تای بالا اینه که در این باید علامت کلاس را بزرای علامت کلاس همان دات هست
// console.log(textclass)

//با ایدی
// let textid = document.querySelector("#text")    //و در اینجا نشانپر ایدی را می پذاریم که شارپ است
// console.log(textid)
//می تونیم با این روش خود نامش را هم بگیریم مثل این مثال پایین ولی باید مستقیم فقط اسمش را بگیم
// let textname = document.querySelector("p")
// console.log(textname)
//و پیشنهاد می شود برای گرفتن یک المنت با جاوااسکریپت از این روش بالا استفاده کنیم

//querySelectorAllولی ولی این روش بالا میاد اولین المنتی که می بینه را میاره می ده  مثلا ما 3 تاتگ پی داریم ولی میاد اولی رو می ده این رو ایدی و کلاس هم صدق می کنه پس بخاطر همین می تونی از
// let textnames = document.querySelectorAll("p")
// console.log(textnames[0])  //می تونیم اینجوری ایندکس ش را هم بگیریم
//می تونیم روش عملیات هایی هم انجام بدیم چرا چون می یاد در جواب اگر به کانسول نگاه کنید یک ارایه به ما می ده پس به مثال پایین نگاه کنید
// textnames.forEach((text) => {
// text.style.color = "orange"
// })

//✅❗❕❗❕✅
// document.getElementById('id')   //element
// document.getElementsByClassName('class')   //Html Collection
// document.getElementsByTagName('name')   //html Collection
// document.querySelector('.class #id tag')   //element
// document.querySelectorAll('.class ایدی نمی شه چون ایدی منفصربهفرد است tag') //Node List
//پیشنهاد می شوداز کیوری سلکتور استفاده کنیم و سلکتور ال چون وقتی از کلاس نام و تگ نام استفاده می کنیم اون ها یک اچتیامال کاکشن می دهند که ان اجازه استفده از متد های ارایه را نمی دهد ولی وقتی از دو تا اخر استفاده کنیم می تونیم هر چیزی که در ارایه است مثل حلقه وو اسفاده کرد

//📘DOM =>> textContent  &&   innerHtml
//pگرفتن محتوای داخل یک ایتم مثلا تگ
//textContent
// let textElement = document.querySelector(".text")
//در پایین هر دو یک کار راانجام می دهند و محتوای داخل پی را لاگ می گیرن ولی
// در چیست؟ innerHTML درtextContentتفاوت
//تکس کانتنت میاد محتوای تگ پی را می ده ولی  کاری نداره تو از استرانت و از  وو استفاده می کنی در محتوایت یا نه و اما اینر اچتیامال  حتی درونش محتوای اچتیامایل هم وجود داشته باشه  همون را هم مثل متن برمی گردونه
// console.log(textElement.textContent)
// console.log(textElement.innerHTML)

//
// const title = document.getElementById("text2")
// title.textContent = "welcom cmvkkvkm mvkm njnfjdnj njn"

//📘DOM =>> getAttribute  &&  setAttribute
// const title = document.querySelector("#title");
// const image = document.querySelector("img")

// getattribute
// console.log(title.id) // گرفتن اتریبیوت
// console.log(image.src)  //اگر از این روش برای گرفتن اس ار سی یک ایمج را بگیریم اون ادرسی که به ما می ده ادرس ابیسلوت است
// console.log(image.date) //چون دیت از اتریبیوت های ثابت ایمج نیست و ما خودمون ساختیم اندیفیند می ده  ولی اگر بخاییم این انیفیند نده و دیت رو لاگ بگیریم از روش پایین استفاده می کنیم
// console.log(image.getAttribute("date"))
// console.log(image.getAttribute("src"))

// setattribute
// const linkElement = document.querySelector(".link")
// linkElement.setAttribute("href" , "https://www.google.com")  //لینک دادن به تگ ای با ست اتریبیوت
// linkElement.setAttribute("id" , "link-tag")

// console.log(title)
// console.log(image)
// console.log(linkElement)
// end of get a...  set a...

// lomp
// const lampImage = document.querySelector(".lamp-image")

// const turnOnLamp = () => {
//     lampImage.setAttribute("src"  , "./assets/on-lamp.png"),
//     lampImage.setAttribute("alt" , "onnnn")
// }

// const turnOfLamp = () => {
//     lampImage.setAttribute("src"  , "./assets/off-lamp.png")
//     lampImage.setAttribute("alt" , "offf")
// }
// // end of lomp

// 📗DOM =>> chang style of element
// let button = document.querySelector("button#btn")
// button.style.background = "blue"
// button.style.backgroundColor = "blue"  //اینجوری می تونیم استیل های دو بخشی بدیم با جاوااسکریپت
// button.style.color = "white"
// console.log(getComputedStyle(button).color)  //اینجری می تونیم به هر استیلی که به باتنمان دادیم دسترسی داشته باشیم ولاگ بگیریم والبته م یتونیم استیل هایی کهمثلا ت وسی اساس دادیم اون ها را هم بگیریم
// end   chang style of element

//کار با کلاس لیست بخش اول
// const box = document.getElementById("box");
// function showBox() {
//   console.log(box.classList);
//   box.classList.add("show-box");
// }
// showBox();
// function hideBox(){
//     box.classList.remove("show-box")
// }
// function taggleBox(){
//     box.classList.toggle("show-box")
// }
//کار با کلاس لیست   end

//کار با کلاس لیست بخش دوم
// const box  = document.querySelector(".box")

// const changeShape = () => {
//     box.classList.replace("box"  ,"circle")  //ورودی اولی می گه که بیا باکس را حذف کن و دومین ورودی می گه که بیا جای اون بشین
//     //در پایین به این مربوط به کانتینز است
// }
// console.log(box.classList.contains("circle"))  //کانتینز می گه که ایا این المنت من ایا شامل کلاس سیرکل هست یا نه اگه باشه ترو را بر می گردونه اگه نباشه فالس

//با این هم می تونیم اتریبیوت یک المنتی را ازش حذف کنیم   box.removeAttribute("class")

//کار با کلاس لیست بخش دوم  !!!    end   !!!

// function togglethems(){
//     const body = document.body;
// if (body.classList.contains("dark")){
//     body.classList.remove("dark")
// }else{
//     body.classList.add("dark")
// }
//یا خیلی ساده تر
//     body.classList.toggle("dark")
// }

//creating element   ساخت المنت در دام
// const paragrath = document.createElement("p")   //می گه که یک تگ یا المنت ا چتی ام الی بساز مثل پی
// paragrath.textContent= "this is a paragrath"
// paragrath.classList.add("text")
// console.log(paragrath)

// document.body.appendChild(paragrath)
// //مثلا می خواییم در اچ تی ام ال یک  تگ دیو داریم و این تگ پی را داخلش بزاریم باید اول توی اچ تی ام ال یک دیو بسازیم و به مثال پایین دقت کنید
// const add = document.querySelector(".container")
// add.appendChild(paragrath)
//end of creating element

//creating container
// const cont = document.createElement("div");
// cont.classList.add("container");
// console.log(cont);

//creating image
// const image = document.createElement("img");
// image.setAttribute("src", "#");
// image.setAttribute("alt", "image");
// image.classList.add("image");
// console.log(image);

// appending image into container
// cont.appendChild(image);
// console.log(cont);

// document.body.appendChild(cont);
// document.body.append(cont);

//Append  VS Appendchild
//با اپند چیلد ما می تونستیم یک المتی را بندازیم درون المنت دیگری
// یک مثال از اپند
// document.body.appendChild(cont);
// document.body.append(cont);
//در اینجا جفتشون یک کاری را می کردن کانت را در درون بادی انداختن
//در درون اپند چایلد باید یک المنیت بزاریم که با جاوا اسکریپت ساختیم و نمی تونیم متنی بزاریم درونش ولی با اپند می تونید نود المنت بزاریم به پایین نگاه کنیم
// document.body.appendChild("htinf dfn");
// document.body.append("nnffin nn");

//حالا اگر بخواایی یک متن را بندازی درون المنتی  و همچنان از اپند چاید به جای اپند استفاده کنی اون متن تو نباید یه متن معمولی باشه  باید قبلش اونو تبدیلش کنی به  تکس نود
// const nodetext = document.createTextNode(" mmfkk ")
// document.body.appendChild(nodetext)

// const paragrath = document.createElement("p")
// paragrath.textContent = "this is paragrath"
// paragrath.classList.add("text")
// console.log(paragrath)
// document.body.append(paragrath)

// Append Paragrath into Body
// document.body.appendChild(paragrath)
//دومین تفاوت این دو در اینه که وقتی خروجی شون را لاگ بگیری  خروجی های متفاوتی می گیری
// const appendChildResult = document.body.appendChild(paragrath)
// const appendResult = document.body.append(paragrath)
// console.log(appendChildResult)
// console.log(appendResult)   //وقتی در هچین شرایطی از اپند استفاده کنی اندیفیند می ده
//پس توی موقعیت هایی که  که تو نیاز داشتی  اون المنتی که اپندیش کردی تو یه المنت دیگری  او ن و مثلا دریافت کنی  مو تونی از اپند چایلد استفاده کنی  که این نتیجه را درون یک متغیری بندازه پس اگه از اپند چایلد استفاده کنی نتیجه را برات برمی گردونه
//دومین تفاوتشون در اینه که اپند چایلد نتیجه ای را به عنوان خروجی برمی گردونه  و می تونی نتیجه را در درون یک متغیری بگیری اما اپند چیزی را بر نمی گردونه

//سومین تفاوتشون
//اینه که وقتی از اپند استفاده می کنی تو قابلیت اینو داری که چندین تا المنت رو اضافه کنی  مثلا به مثال پایین دقت کنید
// const heading2 = document.createElement("h2")
// heading2.textContent = "htis is heading2"
// document.body.append(paragrath  , "hello world" , heading2)
// //ولی اگر بیاییم از اپند چایلد استفاده کنیم فقط میاد اولین را می اندازه
// document.body.appendChild(paragrath  , "hello word" , heading2)

//سومین تفاوتشون در این بود که  اگر از اپند استفاده کنی قابلیت اینو داری که چندین تا المنت را بندازی توی سایت  اما اپند چایلد قابلیت انو می ده که   یک نود المنتی را فقط بندازی توی سایت
//پیشنهاد می شود از  از هر دو در موقیت هاش استفاده کنی
//  ولی در کل توی موقعیت هایی که خواستی مثلا می خوایی یک متنی را به یک تگ دیگه اضافه کنی  بیا از اپند استفاده کن یا حتی خواستس چند تا نودالمنت با هم اضافه کنی به یک تگ از اپند استفاده کن      element.append("this is text")
//اما اگر خواستس فقط یک نود المنت اضافه کنی به یک المنت از اپند چایلد می تونی استفاده کنی
//اما اگر خواستی نتیجهی ان اپند کردن المنتر را دریافت کنی باید بیایی از اپند چایلد استفاده کنی

//📘 prepend & insertBefore & insertAdjacentElement
//اینها هم مثل اپند و اپند چایلد
// هستند ولی اینها با دقت  و جزعیات بیشتر محل قرار گیری نود المنت را  مشخص می کنند و البته با این ها میتونیم بگیم المنت ما که می خواییم بزاریم اولش قرار بگیره وسطش ووو....ل

//🏅prepend
//create title
// const heading = document.createElement("h2")
// heading.textContent = "this is title"
//append title tobody
// document.body.append(heading)  //وقتی اینجوری بریم پشت ماجرا می بینیم که تپ نوشته ما زیر اسکریپت قرار گرفته و این درست نیست تگ اسکریپت باید همیشه پایین تگ بادی قرار داشته باشه
//استفاده می کنیم prependبرای اینکه تگ اچ دو ما بالای تگ اسکریپت باشه میاییم به جای اپند از
// document.body.prepend(heading)   //الان اگر انسپکت بگیریم می بینیم که تپ نوشته ما بالای تپ اسکریپت قرار گرفته است
//تفاوت اپند و اپند چیلد با  پریپند در اینه که اون دو تا می یومدن  اون تگی که ساختیم را در انتهای اون تگ یعنی اسکریپت قرار می دادند ولی پراپند میاد اون را اول تگ مورد نظر قرار می ده

//🥈insertBefore  == جایگذاری کردن یک المنت قبل از المنت دیگر
//htmlاول تگ  یو ال را فعال کنید در
// const laptop = document.querySelector("#laptop-list")
// const newItem  =document.createElement("li")
// newItem.textContent = "apple"
// console.log(laptop.children[2])
// laptop.insertBefore(newItem , laptop.children[0])  //در اولین وردی باید ایتمی که می خواییم جایگذاری کنیم را بگیم پس باید ایتمی بسازیم در دومین وودی هم باید بگیم مثلا بیا قبل از یکی از ایتم ها قرار بگیر برای همین روی اون کد اچ تی ام الی پیمایشی کنیم

//🥇insertAdjacentElement  ==چهار تا پوزیشن و موقعیت داره
//  css and htmlاول فعال کردن بخش
// let cont = document.querySelector(".container")

// const button = document.createElement("button")
// button.textContent = "button"

// cont.insertAdjacentElement("beforebegin" , button)    //اولین ورودی پوزیشنش هست
// cont.insertAdjacentElement("afterbegin" , button)  // در اینجا شاد در ظاهر تعغیری نبینید ولی در این صورت باتن ما می رود ودرون دیو قرار می گیرد
// cont.insertAdjacentElement("beforeend" , button)    // اینجا هم مثل مثال بالا هست ولی این بیفورع اند یعنی قبل از پایان وثتی اینیسپکت بگیرید می بینید در پایان دیو قرار گرفته است

//📘  remove & RemoveChild & replacechild
// const list = document.querySelector(".list")

// function removeList(){
// list.remove()   //برای حذف همش
// list.children[0].remove()   //برای حذف فرزندان    که پیشنهاد نمی شود از این روش اسفاده کنیم وبهتره از روش پایینی استفاده کنیم
//     list.removeChild(list.children[1])    //پیشنها د می شود از این روش برای حذف  کردن فرزندان المنت استفاده شود و پیشنهاد می شود از ریمو برای حذف خود خود المنت ها استفاده شود
// }

//replacechild
// const newNode = document.createElement("li")
// newNode.textContent = "Lenovo"
// const replacelistchild = () => {
//     list.replaceChild(newNode , list.children[0])    //اولین ورودی المنتی قرار می گیره که قراراه جایگزین باشه می باشه و دومین ورودی هم باید ادرس المنتی باشه که می خوام حذف بشه
// }

//📘 DOM traversal
//اول باید چیز هایی اچیتیامالیش را فعال کنیم
// const button = document.querySelector(".btn")
// console.log(button.parentElement)   //پرنت یعنی چی یعنی مثلا ما با دمه مان را گرفتیم و پایین پرنتش را لاگ گرفتیم یعنی مثلا پدرش را  یا می گه که این دیو پرنت المنت باتن می باشد
// console.log(button.parentElement.parentElement)  //می تونیم  پرنت المنت پرنت المنتش را هم بگیریم یعنی میاد بابا بزرگش را می ده

//وحالا برعکسش یعنی می خواییم بچه های کانتینر را بگیریم
// const container = document.querySelector(".container")
// console.log(container.children)
//می تونیم محتواش را هم عوض کنیم
// container.children[0].textContent = " hello world"

// container.children[0].textContent = "helloooooo worlddddd"  //برای گرفتن اولین فرزند المنت این راه هست ولی راه ساده تر هم می باشد
// console.log(container.firstElementChild)//راه ساده این است    ما با این مسعله روبرو اولین فرزند ان المنت یعنی کانتینیر را گرفتیم
// console.log(container.lastElementChild)//ومی تونیم اخرین المنت را هم بگیرییم

//گرفتن المنت قبل تر و یا المنت بعد تر مثلا ما در پایین می خواییم المنت بعد قبل باتن را بگیریم
// const button1 = document.querySelector(".btn")
// console.log(button1.previousElementSibling)   //گرفتن المنت قبل تر
// console.log(button1.nextElementSibling)//گرفتن المنت بعد تر

//پروژه یا تمرین کوچیک برا یپیمایش المنت ها
// const removeParent = (btn) => {
// console.log(btn)
// console.log(btn.parentElement) // ولی ساده تر در پایین می نویسیم
// btn.parentElement.remove(); //این باکس را عادی حذف می کنه پس رنگش در سی اساس تعغیرر می کنه پس تعجب نکنید
// }

//start***************** رویداد های موس یا همون روشی که به جای انکلیک یاد می گیریم       📕 mouse event📕*****************start
// const button = document.querySelector(".btn");
//برای اینکه بگیم وقتی روی اون باتن کلیک شد یه اتفاقی بیفته از این طریق این کار را انجام می دیم
// button.addEventListener("event" , ()=>{}   یا می تونیم بیرون از اینجا هم فراخانی کنیم فانکشن را ولی باید اسم فانکشن را بزاریمnamefunction)   //ما باید دو تا ورودی بهش بدبم اولین ورودی می گه که  من وقتی روی این باتن فراخانی شدم چه  ایونتی روش فراخانی بکنم  و دومین ورودی هم می گه وقتی روی این باتن کلیک شد من چه کاری انجام بدم که می تونیم فانکشن درونش باز کنیم
// button.addEventListener("click" , function(){
//   console.log(":bbbb")
// })
//حالا اگر اینو با اسمش بزاریم می تونیم پایین بیرون از ادداونت فانکشنش را صدا کنیم
//حالا اگر فانکشن ما از نوع اروفانکشن باشه خطا می دهد پس اگر خاستید با ارو فانکشن صدا بزنید و اگر خواستید اروفانکشن باشه باید اون فانکشن که با اروو فانکشن ساختی رابالای ادداونت بزاری تا کار کنه یا هم از اروفانکشن استفاده نکنیم
// const namefunction = () => {console.log("hh")}
// button.addEventListener("click" ,namefunction)
// function namefunction(){console.log("hh")}   //با فانکشن معمولی درست کار خواهد کرد
// const namefunction = () => {console.log("hh")}   //ولی با اروفانکشن می بینیم که کار نمی کند پس وقتی از اروفانکشن استفاده کردیم باید بالای ادداونت بزاریمش

//یک تفاوت دیگه که این اددایونت لیسترنر به روش قبلی داره اینه که ما با این روش جدید می تونیم محدودیت کلیک هم بذاریم مثلا بگیم فقط یک بار کلیک بشه
// button.addEventListener("click" ,namefunction , { once:true })             //once:trueمیایم به عنوان ورودی سومش یه کاما می زاریمو یک ابجکت باز می کنیم و فقط کافیه توی اون بنویسیم
// function namefunction(){
//   console.log("button clicked")
// }

//ایوینت های بعدی که قراره یاد بگیریم در پایین هستند که عوض کردن نام هایشان می تونیم جواب شون را بگیریم
// کار موس دن اینه که  وقتی اجرا می‌شود که دکمه‌ی ماوس را فشار می‌دهی (هنوز رها نکرده‌ای).
// button.addEventListener("mouseup" ,namefunction)    // هم موقعی کار می کنه که من انگشتم را از روی کلیک بردارمmouse upحالا تفاوتشون در اینه که کلیک هر وقت که ما دستمون رو از چپ کلیک برداشتیم دکمه اجرا می شه وموس دن هم وقتی که روی کلیک چپ زدیم در جا اجرا می شه          حالا یکی دیگه هم هست به نام   mousedownبرای دیدن تاثیر موس دن به جای اون دبل کلیک بنویس
// function namefunction(){
//   console.log("button clicked")
// }

//تفاوت دیکلرشن فانکشن واروفانکشن در اینجا در اینه؟که اگه از اروفانکشن استفاده کنی باید اون فانکشن را بالای ایونت فراخوانی کنی  ولی اگر از دیکلرشن فانکشن استفاده کنی  هیچ تفاوتی ندارد که این فانکشن تو قبل از این ایونت قرار دارد یا بعد از ایونت

//برای پارت دوم هم اون باتنی که در تب ایندکس بود را فعال می کنیم
//mouse event part2📘
// const button = document.querySelector(".btn")
//contextmenu==راست کلیک    ,,   mouseenter    ,,,    mouseleave==ترک کردن   ,,,    mousemove==حرکت کردن
//تو این متد می تونی به جای باتن دوکیومنت بنویسی و هر وقت تو کل فایلمون کلیک شد این ها اجرا بشه
// button.addEventListener("mousemove" , ()=>{
//   console.log("clicked")
// })
//end***************** رویداد های موس یا همون روشی که به جای انکلیک یاد می گیریم       📕mouse event📕*****************end

//📘 Mouse Event Objects
// const button = document.querySelector(".btn")
//با این ایونت می تونیم اطلاعات بیشتری به دست بیاریم از دکمهی کلیک شده
// button.addEventListener("click" , (event) => {
// console.log(event)
// console.log(event.target)  //ولی ساده تر هم می شه این المنت را لاگ گرفت ولی توی پروژه ها به کار میاد
// console.log(button)  //اینجوری می شد ولی بالا گفتم چرا
// })

//حالا برای اینکه وقتی راست کلیک کردیم و اون تب باز نشه از روش پایین استفاده می کنیم
// document.addEventListener("contextmenu" , (event)=>{
//   event.preventDefault()
//   console.log("right click")
// })

//📒keayboard event📒
// document.addEventListener("keydown" , (e) => {
//   console.log("key down :" + e.key)
// })

// const text = document.querySelector("#type")
// document.addEventListener("keydown" , (e) => {
//   text.textContent += event.key
// })

// document.addEventListener("keydown" , (event) => {
// console.log(event.code)       //ایونت دادت  کد میاد کد دکمه یا کلیدی که روش کلیک کردی را می دهد ایونت دات کی می یاد اون کلیدی که روش کلیک کردی رو می ده
//یه ایونت دیگه هم هست که پایین می بینیم
// console.log(event.ctrlkey)
//   if(event.ctrlKey && event.key === "s"){
//   e.preventDefault()
//     console.log("yessssssss")
//   }
// })

// keydown چندبار پشت‌سرهم اجرا می‌شود
// keyup فقط یکبار وقتی رها کنی

// document.addEventListener("keyup" , (event) => {
//   console.log("key up")
// })

// 📘 Input Events
// const inputElement = document.querySelector(".input")
// const messageElement = document.querySelector("#message")
// inputElement.addEventListener("input" , (e)=>{
// console.log("input")
// const value = e.target.value; //ما با این طریق به ولیو این اینپیوت رسیدیم
// messageElement.textContent = value
//e.trgetاین به همون به همون اینپیوتی که این ایونت ما روش فراخانی شده
// })

//لاگین کردن ساده با ایونت اینپوت
// const inputElement = document.querySelector(".input")
// const button = document.querySelector(".btn")
// inputElement.addEventListener("input" , (e) => {
//   const value = e.target.value
//   if( value.length > 0 ){
//     button.disabled =  false
//   }else{
//     button.disabled =  true
//   }
// })

//change  // این هم مثل ایونت اینپیوت هست ولی بعد از نوشتن متن داخل اینپیوت باید یک بار بیرون از اینپیوت کلیک کنیم
// const inputElement = document.querySelector(".input")
// inputElement.addEventListener("change" ,  (e)=>{
// console.log(e.target.value)
// })

//قسمت بعدی
// const inputElement = document.querySelector(".input");
// const nameElement = document.querySelector(".name-element");
// const sizeElement = document.querySelector(".size-element");
// const typeElement = document.querySelector(".type-element");

// inputElement.addEventListener("change" , (e) => {
// console.log("change input")
// console.log(e.target.files)  //وقتی اینجوری اینو لاگ بگیریم می بینیم که یک ابجکت از مشخصات عکس داده که در ایندکس صفرم هست پس این را کامنت کنید و پایینی را از کامنت باز کنید این را هم بع عنوان یادگیری حتمی حتمی در مرورگر یک بار ببین محمد خر
// console.log(e.target.files[0].name)   //بعد از دیدن جواب این هم این را کامنت کنید و پایینی را باز کنید از کامنت    حتمی نگاه کن
// nameElement.textContent = e.target.files[0].name;
// sizeElement.textContent = e.target.files[0].size
// typeElement.textContent = e.target.files[0].type
// })

//ادامه ی این قسمت با مبحث جدیدی
// const selectElement = document.querySelector(".select");
// selectElement.addEventListener("change" , (e) => {
//   console.log(e.target.value)
// })

// <!-- //ادامه ی این قسمت با مبحث جدیدی 2 -->
// const checkbox = document.querySelector("#checkbox")
// checkbox.addEventListener("change" , function() {
// console.log(this)   //در اینجا می بینید که از دیس استفاده کردیم حالا برای چی چون که می خواییم به خود این چکباکسس یا همون اینپیوت مان اشاره کنه ولی وقتی از دیس می خواییم استفاده کنیم و اون چیزی که گفتم  بشه یعنی گرفتن خود المنت باید به جای ایتفاده از اروفانکشن از  دکلریشن فانکشن استفاده کنیم  چون وقتی از اروفانکشن استفاده می کنیم میاد شی ویندو را لاگ می گیرد پس اون را از نوع دکلریشن می سازیم  و در ظمن این را کامنت کنید چون این برای نکته بود
// if(this.checked){  //در اینجا می گه که اگر این چکباکس من اگر فعال بود بیا این را لاگ بگیر
//   console.log("checkbox is on")
// }else{
//   console.log("checkbox is off")
// }
// })

//قسمت سوم
// const inputElement = document.querySelector(".input")
// const messageElement = document.querySelector(".massage")

//focus
// inputElement.addEventListener("focus" , (e) => {
// console.log("focus")
//   e.target.classList.add("focus-input")
//    messageElement.textContent = "what is your name?"
// })

//blur
// inputElement.addEventListener("blur" , (e) => {
// console.log("blur")
//   e.target.classList.remove("focus-input")
//   messageElement.textContent = ""
// })

//پس به طور کلی می تونستیم با فوکس و بلر  کاری کنیم که وقتی روی انپیوت کلیک شد یه اتفاقی بیفته و با بلر می تونستی کاری کنی که وقتی خارجش کلیک شد یه اتفاق دیگه ای بیفته

//ایونت های بعدی که مربوط یا در اصل شبیه به این مثال ها و کد های بالا هست
//شامل قسمت سوم هستن
// const inputElement = document.querySelector(".input"); //در اینجا این کی دین را قبلا کار کرده بودیم ولی اون اون موقع و توی اون موقعیت به کل صفحه مربوط می شد ولی در اینجا به داخل انپیوت مربوط هست  و البته اون موقع می گفتیم دوکیومنت یعنی کل صفحه ولی اینجا گفتیم فقط محدود بشه به اینپیوت المنت
// inputElement.addEventListener("keydown", (e) => {
// console.log("keydown")
//ایونت بعدی که خیلی مهم هم نیستن نفهمیدی هم نفهم ولی حتمی بفهمم خری که این را می خونه
// console.log(e.target.value); //در اینجا می بینیم که با کی دیون وقتی یک کلمه می نویسیم نشون نمی ده بعد دو تا نوشتن اون قبلی را نشون می ده پس این ضعف کی دن
//بعدی keyupهست که وقتی انگشتمان روی یک کلید کیبورد باشه انقد کلمه با سرعت می نویسه برخلاف کی دنو  انپیوت که با گذاشتن انگشت فقط یکی می  نوشتن
// });

// 📒باتن سابمیت روی فرم ها 📘
// const forms = document.getElementById("form")
// const nameInput = document.querySelector("#full-name")
// const password = document.querySelector("#password")

// forms.addEventListener("submit" , (e) => {
//   e.preventDefault();   //وقتی اینو بدیم رفتار پیش فرش ارسال را خنصا می کنیم ومثلا اطلاعات به سمت بکاند ارسال نمی شه
// هست که با اکشن باید بفرستیم و دومینروش  از طرف جاوا سکریپت هستو رالبته و البته برای اینکه از طرف جاوا اسکریپت بفرستیمباید اکشن یا ارسالی اچ تی ام الی را غیرفعال کنیم با پریوینت دیفالت پس برای ارسال با جاوااسکریپت باید اون چیزی که گفتم را با پریوینت دیفالت غیر فعال کنیم اولhtmlما می تونیم اطلاعات را به دو صورت به سمت بک اند بفرستیم که اولین روش از طرف
// console.log("submit")

// اعتبار سنجی
// if(nameInput.value.trim() === ""){
//   console.log("please inter your name")
//   return;   //این را به خاطر این می نویسیم که طرف وقتی اطلاعات را اشتباه وارد کرد دیگه کد های پایینیمون اجرا نشه  کار ریترن اینه که دیکه نزاره کدهای پییینی ش در صورت درست بودن شرط اجرا نشه
//   }if(password.value.length < 5 ){
//     console.log("You must enter more than 5 characters.")
//     return
//   }
//   console.log("ok")
// })
// end   📒باتن سابمیت روی فرم ها 📘    end

//📘 target  vs  currenttarget Start
// const button = document.querySelector(".btn")
// button.addEventListener("click" , (e) => {
// console.log(e.target)   //وقتی اینجا  اینو بنویسیم میاد  دکمه ای که ایونت کلیک روش اجرا شده را برا من می گیره
//الان ما از فونت اوسم از ایکوناش استفاده کردیم  و از ای دات تارگت استفاده کردیم  قاعدتا الان ما اگر روی دکمه مان کلیک کنیم خب باتن را لاگ می ده ولی اگر روی اون ایکنش کلیک کنیم می بینیم که خود کد ایکن را می دهد پس این یک فاجعه است    اگر نفهمیدی  به نتیجه نگاه کن خر جان و روی  بات و ایکن کلیک کن
//currenttargetاز targetراحل اینه که به جای
// console.log(e.currentTarget)
//برای اینکه باز هم از تارگت استفاده کنیم و اون مشکل را حل کنیم باید در سی اس اس این را قرار بدیم     i{pointer-events: none}
//استفاده کنیم البته وقتی از دیس استفاده کردیم باید فانکشن ما نوعش دکلریشن فانکشن باشهthisازe.targetیه نکته که مهم هست  باید بدونیم اونم اینه که ما می تونیم به جای استفاده از
// })
//📘 target  vs  currenttarget    end

//💢💥spotPropagation💢💥   start
// const parent = document.querySelector(".parent")
// const child = document.querySelector(".child")

// parent.addEventListener("click" , () => {
//   console.log("parent clicked")
// })
// child.addEventListener("click" , (e) => {
// console.log("child clicked")     //در اینجا می بینید که وقتی روی این کلیک شد پرنت کلیکید هم اجرا می شود اگر بخواییم این اجرا نشه کار های پایین را انجام می دهیم
//برای انجام کار بالا یعنی وقتی روی بچه کلیک کردیم پدرش را لاگ نگیرد میاییم کد هایی پایین را اجرا می کنیم   اولین راه اینه که بالا ایونت یا ای را بنویسسیم بعد پایین هم باید این را بنویسیم
//   e.stopPropagation()
//   console.log("child clicked")
// })

//❗❗modal❕❕    start
// const overlay = document.querySelector("#overlay")    //Parent
// const modal = document.querySelector("#modal")    //child

// overlay.addEventListener("click" , (e) => {
//   overlay.style.display = "none"    //در اینجا وقتی دیسپلی را غیر فعال می کنیم مثل اینه که کلش را حذف می کنیم
// })

// modal.addEventListener("click" , (e) => {
//   e.stopPropagation()    //این استاپ پرا پوجیشن  را معمولن و درست ان باید به فرزند بدیم نه خود پرنت
// })
// ❗❗modal❕❕    end
//💢💥spotPropagation💢💥    end

// 📗برقراری رویداد های همگانی روی چندین المنت
// const buttons = document.querySelectorAll(".btn");

// 🔴🔴🔴/در اینجا نمی تونیم از اددایونت لیستنر استفاده کنیم چون که یک واحد نیست یک نود لیست هست پس بخاطر همین نمی تونیم از این استفاده کنیم پس مساسسم در پاییم از فور ایچ استفاده می گنیم چون یه یک نود لیست هست نود لیست هم یک ارایه هست  این مثلال پایینی که با اد ایونت ساختیم را غیر فعال کنید و با فور ایچ را فعال کنید
// buttons.addEventListener("click" , () => {
//   console.log("kk")
// })

//width forEach
// buttons.forEach((btn)=>{
// console.log(btn)
// btn.addEventListener(("click") , (e) => {
// console.log("click")
//   e.target.parentElement.remove()
// })
// })
// 📗برقراری رویداد های همگانی روی چندین المنت       end

// 📒 Event Delegation
// const parentList = document.querySelector(".productList")

// parentList.addEventListener("click" , (e) => {
// console.log("ll")
// console.log(e.target)
// حالا شرتمون را می نویسیم و اون دو تای بالا را کامنت می کنیم
// if(e.target.classList.contains("editBtn")){
//   console.log("edite btn clicked")
// console.log(e.target)    //با این می تونیم به دکمه ای که کلیک شده برسیم
//   }
//   if(e.target.classList.contains("deleteBtn")){
//     e.target.parentElement.parentElement.remove()
//   }
// })
// 📒 Event Delegation    end

//click & focus   صرفا برای گذاشتن برای اینکه مثلا کلیک شدن و اینا نیست می تونیم  بگیم روی فلان دکمه کلیک بکن یا فوکس بکن و با کار قبلیش که مثلا این بود می گفت اگر کلیک شد یه اتفاقی بیفته
// const inputBox = document.querySelector("#inputBox")
// const focusbutton = document.querySelector(".focusBtn")
// const clickbutton = document.querySelector(".clickBtn")

// focusbutton.addEventListener("click" , () => {
//     inputBox.focus()
// })

// clickbutton.addEventListener("click" , () => {
//     focusbutton.click()
// })

//📗  custom attribute  == اتریبیوت شخصی سازی شده  ==>  dataset
//ما با این قابلیت این را داریم که اتریبیو های شخصی سازی شده ای را بدیم  و توی جاوااسکریپت اونا را دریافت کنیم
// const items = document.querySelectorAll(".item")
// items.forEach((item) => {
//     const colors =  item.dataset.backgroundColor  //می تونستم از گت اتریبیوت هم استفاده کنیم ولی این روش روبرویی که پیشنهاد می شود
//     item.style.backgroundColor = colors
// })

//📒 setTimeout
// setTimeout(() => {
//     console.log("settimeout✔")
// } , 3000)  //هر یک ثانیه برابر است با هزار می لی ثانیه

//setTimeoutپروژه کوچیک با
// const incrementbtn = document.querySelector(".increment-btn")
// const counter = document.querySelector(".counter")
// let count = 0;

// incrementbtn.addEventListener("click" , () => {
// setTimeout(()=>{
//     count++
//     counter.textContent = count
// } , 1000)
// })

//مثال بعدی
// const welcomeTitle = document.querySelector(".welcome-title");
// setTimeout(() => {
//   welcomeTitle.classList.add("show"); //می تونیم این را در درون فانکشن خارجی بنویسیم و در این صورت باید بیاییم بالا به به جای نوشتن ارو فانکشن اسم اون فانکشنی که ساختیم را می زاریم ولی باید توجه کنیم که فانکشنی که در بیرون ساختیم باید از موع دکلریشن باشه مگر نه اگه از نوع اروفانکشن باشه ارور می ده و وقتی از ارو فانکشن استفاده کردیم باید اون را بالای ستتیم اوت بزاریم
// }, 3000);

//📙setinterval  ==> repeats every delay == هر تاخیر را تکرار می کند
//سینتکس اش مثل ست تایم اوت هست
// const counter = document.querySelector(".counter")
// let count = 0
// setInterval(() => {
//     count++;
//     counter.textContent = count
// }, 1000);

// setInterval(() => {
//   console.log("hi");
// }, 1000);

//clearinterval  === کارش اینه که وقتی با ست اینتروال گفتیم مثلا اعداد را بنویس تا اخر می نویسه حالا می خوییم بگیم مثلا یه جا وایسا برای این کاراز کلیر اینتروال استفاده می کنیم
// const counter = document.querySelector(".counter")
// const stopbutton = document.querySelector(".stopBtn")

// let count = 0

// const counterInterval = setInterval(() => {
//     count++;
//     counter.textContent = count
//یرای اینکه با دکمه این کار پایین را انجام بدیم از اینجا به پایین را غیر فعال می کنیم

// if(count === 5){
//     clearInterval(counterInterval)
// }
// }, 500);

// stopbutton.addEventListener("click" , () => {
//   clearInterval(counterInterval)
// })

//🎃🎃animation && transition🎃🎃
// setTimeout(() => {
//     document.querySelector("#box").classList.add("moved")
// }, 3000);

//مثال بعدی
// const box = document.querySelector("#box")
// setInterval(() => {
//     box.classList.add("shake")

// setTimeout(()=>{
//         box.classList.remove("shake")
// }, 400)  //این چهار صد باید برابر با انیمیشنی زمانی که در سی اس اس دادیم برابر باشه چون می خواییم وقتی ویبره تموم شد این هم حذف کنه کلاس را    حالا این حذف کردن را راحتر هم می تونیم با مکد های پایین بکنیم

//     box.addEventListener("animationend" , () => {   //در انجا می گه که وقتی روی باکس من این ایونت انیمیشن اند اجرا شد اون اتفاق ها بیفته/
//         box.classList.remove("shake")
//     })
// }, 2000);

//BOM
//بمعنی کار با مرورگر می باشد یعنی با بام می تونیم به یه حجم وسیعی از اطلاعتی در مورد مرورگر کاربری که به سایت ما اومده دسترسی داشته باشم مثلا می تونیم بفهمیم عرض و ارتفاع را مثلا بفهمیم وووو به مجموعه این عملیات ها می گویند کار با بام

// console.log(window)  //با ویندو می تونیم به تمام اطلاعات یکه می تونیم از مرورگر کاربر دریافت کنیم
// const width = window.innerWidth;
// console.log(width)

//bom > لوکیشن
// console.log(window.location)   //می تونیم از ویندو هم استفاده نکنیم و فقط بنویسیم لوکیشن
// console.log(location.href)
/* در نحوهی انتقال کاربر استlocation.href = url و  window.open(url)تفاوت اصلی بین 
در روش لوکیشن ادرس جدید در هماناب فعلی بارگذاری می شود و در صفحهی فعلی جایگزین می شود
اما در روش اپن ادرس جدید در تب با پنجرهای جدید باز می شود د صفحه فعلی باز می ماند*/

// console.log(window.location.hostname)   //soufilearn.ir
// console.log(location.pathname)     //    /index.html
// console.log(location.port)   //5500
// console.log(location.protocol)   //http:
// console.log(location.search)   //میادکویری پارامتر می ده یعنی چی یعنی چیز هایی که بعد از علامت سوال درلینک قرار دارد          ?query=js
// console.log(location.hash)  //http://127.0.0.1:5500/#mm      #mm

//🏆history
//نیازمند فعال کردن باتن در در ایندکس❕
// const backbutton = document.querySelector(".back-btn")
// backbutton.addEventListener("click" , ()=>{
//     window.history.back()  //می تونیم ویندو را ننویسیم
// })

// const forwardbutton = document.querySelector(".forward-btn")
// backbutton.addEventListener("click" , ()=>{
//     history.forward()  //or history.go(1)
// })

//history.go(1)  ==>   history.forward()
//history.go(-1)  ==>   history.back()
//وقتی مقدار  قو را صفر بزاریم با زدن دکمه رفت وبرگشت صفحه ریلود می شه

//به وبسایت هایی که وقتی از صفحه ای به صفحه ای دیگر می ری و صفحه رفرش نمی شود می گن سینگل پیج اپلیکیشن و مخفف اش اس پی ای
// forwardbutton.addEventListener("click" , () => {
//     history.pushState({} , "" , "/mohammad.html")
// })

// Bom ==> 📘 navigator
// console.log(navigator.userAgent)   //می تونیم پشتش ویندو را ننویسیم
// console.log(navigator.language)

//📗 localStorage  == حافظه محلی
// valueو دومی keyلوکال استروج شامل دو مقدار هست یکی

//   * setItem ==> set or update data
// localStorage.setItem("username" , "mohammad")   //می تونیم ویندو پشتش را ننویسیم    اولین ورودی باید در قالب استرینگ باشه باید کلید یا کی را بنویسیم  دومی هم چون در لوکال اسروج هست باید از نوع استرینگ باشه و در دومی ولیو را می نویسیم
// localStorage.setItem("age" , 14)

//   * getItem ==> get data that we set before
// const name = localStorage.getItem("username")   //این گت ایتم فقط یک ورودی می گیره
// console.log(name)

//   * removeItem ==> remove one item from localStorage
// localStorage.removeItem("username")

//   * clearItem ==> remove all item from localStorage
// localStorage.clear("")

//جمع بندی   لوکال استورج یه فضایی داخل مرورگر می باشد که این قابلیت رو به ما می ده که اطلاعات وداده هایی را داخل مرورگر ذخیره کنیم و حتمی اون اطلاعاتی که ذخیره می کنیم باید از نوع استرینگ باشه

//حالا می خواییم مقدار ولیو را ارایه وابجکت بدهیم برای این کار به مثال های پایین کلمه به کلمه با دقت نگاه کنید❕
//📕 set Array & Object in LocalStorage
// const user =  {
//     name: 'mohammad',
//     age: 23
// }
// const array = ["html" , "js" , "php"]
// localStorage.setItem("data" , JSON.stringify(user))   //در اینجا باید مقدار یوزر را به استرینگ تبدیل کنیم تا ارور نده برای این کار نمی اییم از استرینگ و تواسترینک وو استفاده نمی کنیم میاییم از متد روبرو استفاده می کنیم
// localStorage.setItem("data" , JSON.stringify(array))
//
// const savedata = localStorage.getItem("data")
// console.log(savedata)
// console.log(savedata[0])   //حالا برای اینکه این درست کار کنه و مثل یک ارایه وابجکت باشه میاییم برعکس بالا که اومدیم تبدیل به متن کردیم الان هم باید تبدیل کنیم به ارایه یا ابجکت

//بالایی را کامنت کنید
// const savedata = JSON.parse(localStorage.getItem("data"))  //الان این را به ارایه تبدیل کرد پس با جیسون دات پارس می تونیم یک استریینگ را به ارایه تبدیل کنیم
// console.log(savedata)
// console.log(savedata[0])

///
//📕پروژه ذخیره نام در مرورگر📘
//
//Elements
// const  nameInput = document.querySelector("#nameInput")
// const saveButton= document.querySelector(".save-btn")
// const formSection = document.querySelector("#form-section")
// const welcomeText = document.querySelector("#welcome")
// const logoutButton = document.querySelector(".logout-btn")

// //save name to localstorage
// saveButton.addEventListener("click" , ()=>{
//     const name = nameInput.value.trim()
//     if(name){
//         //save name to localstorage
//         localStorage.setItem("username" , name)
//         location.reload()  //این را به خاطر گت ایتم نوشتیم چون بعد از اجرا شدن کد ها میاد نال م ده پس بخاطر همین میااییم بجای ریلود کردن دستی میایییم می گیم خودت بعد وارد کردن نام ریلود شو
//     }else{
//         alert("نام خودت رو وارد کن احمق")
//     }
// })

//get name from localstorage
// const savedName = localStorage.getItem("username")
// console.log(savedName)//این را کامنت کنید

// if(savedName){
//     formSection.style.display = "none"
//     welcomeText.style.display = "block"
//     //در پایین وقتی از تکت کانتنت استفاده می کردیم نمی تونستیم از اسلش ان استفاده کنیم بهخ اطر همین از ایننر تکس استفاده می کنیم
//     welcomeText.innerText = `سلام ${savedName} عزیز \nبه وبسایت ما خوش آمدی🌹‼`;
//     logoutButton.style.display = "block"
// }

//clear localstorage and det new name
// logoutButton.addEventListener("click" , () => {
//     localStorage.removeItem("username")  //حالا میاد حذف می کنه ولی باید ریلود کنیم تا بیاد دوباره بپرسه پس بخاطر همین می نویسیم لوکیشن دات ریلود
//     location.reload()
// })

//

//API برای فهمیدن توضیح ای پی ای در صورت فراموشی قسمت 138

//📘 Rest API & CRUD

//✅Rest
//crud == تلفظ کراد
//به طور ساده ای پی ای چهار تا متد دارد
// Rest API Methods  ==> HTTP Methods
// 1.  Get  ==>   Get Data From Server   ==  با این پت ما میاییم اطلاعات را دریافت می کنیم
// 2.  Post  ==>   Send New Data To Server  == برخلاف گت با پست می تونی اطلاعاتی را بفرستی
// 3.  Put/Patch  ==>  Modify Existing Data  ==عملیات تعغیر اطلاعات را بر عهده دارد  وقتی از پوت استفاده می کنیم که می خوام همه چیز را تعغیر دهیم مثل نام پسورد ولی وقتی از پکچ استفاده می کنیم که می خواییم فقط نام رو تعغیر بدیم
// 4.  Delete  ==>   Remove Data From Server  ==  حذف کردن اطلاعات از سرور

// ✅CRUD
// C  ==>  Create   ==>  POST             ==>  Send new data to server
// R  ==>  Read  ==>  GET                   ==>  Get data from server
// U  ==>  Update   ==> PUT/PATCH  ==>  Modify existing data
// D  ==>  Delete   ==>  DELETE        ==>  remove data from server

//📘 Fetching data from API ❕❗(GET)❕❗
// ما می تونیم درخواست هامون را به سمت سرور بفرستیم و جوابمون را دریافت کنیمfetchingبا
//در خواستمون می تونه
//DELETE    ---   PUT/PATCH  ----  GET   ---  POST
//باشه

// const users = fetch("https://jsonplaceholder.typicode.com/users")  //با این فتچ ما می اییم به سمت سرور فیک یه درخواستی را می زنیم اصتلاحا در خواست گت بزنیم تا اطلاعاتی که هست توی وبسایت خودم  دریافتش کنم
// console.log(users)  //asynchronous
//وقتی تو میایی فتچ رو می رنی به ادرسی و می خوایی اطلاعات اون ادرس رو دریافت کنی این یک عملیات ایسینگ کرونوز هست ایسینگ کرونوز یعنی ناهمزمان یعنی یک عملیاتی که نیازمند وقفه هست و یکم طول می کشه تا اون عملیات انجام بشه و بستگی به اینترنت داره

//با یک مثال سادهasynchronous
// توی جاوااسکریپت وقتی یه درخواست به سرور می‌فرستی یک اتفاق asynchronous میفته.
// یعنی مرورگر منتظر پاسخ از سمت سرور نمی‌مونه و به اجرای بقیه کدها ادامه می‌ده.
// اون‌وقت باید یه تابع مشخص به نام then اجرا بشه تا به محض دریافت اطلاعات، جواب رو پردازش کنه.

//ولی ما نباید مثل بالا درخواست بزنیم باید مثل پایین درخواست بزنیم چون جاوااسکریپت منتظر  نمی مونه که این اطلاعات کاربر ها ووو به دست ما برسه
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
// //  هست  وبه معنی  پاسخ هست پاسخی که سرور در برابر درخواستمون برای ما ارسال می کنهresponseمخفف شده res
// console.log(res)   //کد های این فانکشن زمانی اجرا می شه که  که درخواست ما  با مووفقیت به سرور ارسال شده بوده باشه
//   return res.json(); //برای اینکه اون اطلاعات رو دریافت کنیم باید بیایی که برای جاوااسکریپت قابل خواندن باشهم اون اطلاعات را به یک نوع داه ای تبدیل کنیم که
// })
// .then((data) => {  // هست که داخل کالبک فانکشن اولین دن بازگشت خورده یا به اصطلاح ریترن شدهres.jdonقرار گرفته دقیقا همون thenاین دیتا که داخل ورودی های کالبک فانکشن دومین
//   console.log(data)
// });
//کوتاه شده کد بالا و گرفتن ایندکس صفرم یا یوزر صفر
// .then((data)=>console.log(data[0].name))

//ساختن فایل json
//        ./data.json
//{}در فایل جیسون هرچیزی که می خوایی بنویسی باید
// کلید هایی که می نویسیم درون دبل کوتیشن باشه اگر تک کوتیشن بزاریم هم خطا می ده باید حتمی درون دبل کوتیشن باشه  مثلا مثال زیر را می خواییم درون فایل جیسون بنویسیم به مثال پایین ومثال توی فایل جیون نگاهو دقت کنید
//اگه یه مقدار در فایل جیسون شامل  رایه باشد باید اون را هم درون دبل کوتیشن بزاریم
// const name = {
//   id: 1 ,
//   name: "mohammad"
// }
//این کار را انجام می دادیمpostحالا می گی برای چرا این فایل را می سازیم برای اینکه خودمون فایل حیسون را می سازیم که مثلا برای بقیه بفرستیم به عنوان اطلاعات برای فرستادن هم با روش
//اگه بخواییم از فایل جیسونی که ساختیم هم استافده کنیم دوباره کار نمی کنه برای این که کار کنه باید بیاییم این فایلمون ر هم به فرمتی تبدیل کنیم که جاوااسکریپت بتونه بخونه برای این به مثال پایین دقت دقت دقت کنوید
// const user = '{  "id" : 1, "name" :"mohammad" , "cars" : ["bmw" , "p"] }'
// console.log(user)
// const validUser = JSON.parse(user)
// console.log(validUser)
//در موقعیت هایی که می خوایی یک عبارت جیسونی را تبدیل به یک کد خوانای  جاوااسکریپت بکنی  باید از جیسون دات پارس استفاده کنیم
// const user1 = {  id : 1, name :"mohammad" , cars : ["bmw" , "p"] }
// console.log(user1)
//حالا برای تبدیل ابجکت بالایی به جیسوون باید این کار های پایین را کنیم
// const jsonString = JSON.stringify(user1)
// console.log(jsonString)

//📘 Error Handeling
// const errormessage = document.querySelector(".error-message"); //مربوط به نوشتن ارور در صفحه
// fetch("https://jsonplaceholder.typicode.com/posts/300")
//   .then((res) => {
//       console.log(res)  //  /300برای اینکه اجرا بشه این را بزار اخر لینک کتچ
//بعد اگر به نتیجه نگاه کنید می بینید که مقدار اکی برابر است با فالس پس می تونیم با شرط ها خودمون بگیم که وو به پایین نگاه کن احمق جون
// if(!res.ok){
//   throw new Error("somthing went wrong")   //با این کاری کردیم که کد های داخل کتچ که پایین است اجرا بشه
// }
//کد های این بالا مربوط به خطاهای 404 و500
//     return res.json();
// })
// .then((data) => {
//این دن ها زمانی اجرا می شوند که این درخواست ما به سرور با مووفقیت رفته باشه  و پاسخ با مووفقیت دریافت شده باشه
//   console.log(data);
// })
// .catch((err) => {
//err  == error       اگر با این متد این ارور را نزاریم خود مرورگر ارور می ده ولی نمی تونیم ازش استفاده کنیم مثلا پایین با کتچ که خودمان دادیم اگر دقت کنید می بینید که ارور را در سایت به نمایش گذاشتیم
// errormessage.textContent = err
// errormessage.textContent = err.message; //برای اینکه نوع ارورر را نشون نده و فقط متنش را نشون بده میایییم این کار روبرو را انجام می دهیم
// console.log(err)
// }); //این متد زمانی اجرا می شه که ما به ارور برخورده باشیم
//این کتچ زمانی اجرا می شه که ما افلاین باشیم یا سرور خودش مشکل داشته باشه  یا خراب باشه یا اینکه لینک سرور که ما بالا گذاشتیم خراب باشه

// ♦ but if the server responds with a 404 or 500  ==  وقتی این کد خطا های باشه کد کتچ و ارور اجرا نمی شه  برای این کار میاییم بالا یک شرط می نویسیم پس کد ها را قاطی نکن
//  fetch still considers  it a SUCCESSFUL response   ==   هنوز آن را یک پاسخ موفق می‌داند fetch
//   so it does not go to catch   ===   بنابراین برای گرفتن نمی رود

//

//📕 POST HTTP Method  ==>  send data to server
// const errorMessage = document.querySelector(".error-message");
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   //در ارسال کردن با پوست باید بعد از نوشتن فتچ بیاییم  چیزی که می خواییم ارسال کنیم را می نویسیم
//   method: "POST", //الان این سرور متوجه شده که من می خوام درخواست پوست بزنم و فهمیده که ما می خواییم اطلاعاتی را به سمت سرور ارسال کنیم
//   headers: {
//     //در این هدرز باید نوع چیزی که می خواییم ارسال کنیم را مخص کنیم برای مشخص کردن اول هدرز را می نویسیم ویک ابجکت باز می کنیم توش می نویسیم لطفا دوست عزیز با دقت خودت به طرز نوشتاریش چند بار دقت بکن
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     //idرا خود جیسون پلس هولدر می دهد پس ما نمی دهیم
//     userId: 14,
//     title: "this is title of post!", //ولی با بالا گفتیم فرمتش جیسون باشه ولی ما که الان نیومدیم کلید ها درون دبل کوتیشن ووو بزاریم برای اینکه اطلاعاتی که الان گفتیم بره ارسال بشه میاییم این اطلاعات رادرون جیسون دات استرینگ ایفای می گذاریم هوی خرپوک یواش یواش اروم نگاه کن با دقت
//     body: "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo veli",
//   }),
// })
//   .then((res) => {
//     //میاییم جواب مون را بگیریم چون هر درخواستی پاسخی دارد
//     if (!res.ok) {
//       throw new Error("یه چیزی میلنگه احمق جون");
//     }
//     return res.json();
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     errorMessage.textContent = err.message;
//   });

//
//📗 PUT/PATCH
//
//❕‼❗❗❗❗برای این دو تا اومدم کد های مثال پوست را اینجا اوردم  ولی توضیح هاشون را حذف کردم می تونید برای دیدن توضیحات برید بالا ببینید❗❕
//مثلا این جا گفتیم صدمین را بگیره منطورم ایدی صدمی  https://jsonplaceholder.typicode.com/posts/100 وقتی میاییم از پوت پتچ استفاده می کنیم دیگه نباید ادرس اون سرور را بزاریم باید بیایی م ادرس چیزی که می خواییم تعغیر بدیم را بزاریم مثلا
// const errorMessage = document.querySelector(".error-message");
fetch("https://jsonplaceholder.typicode.com/posts/100", {
  method: "PUT",   //بعد از دیدن نتیجه با پوت مقدارش را پتچ بزار تا نتیجه پتچ را هم ببینی
//فرق پت و پتچ اینه که با پت همه چیز ها را باید بنویسی در صورتی که حتی یک چیز را هم بخوایی تعغیر بدی ولی با پتچ م تونی بگی مثلا فقط تایتل را تعغیر بده
headers: {
  "Content-Type": "application/json",
},
body: JSON.stringify({
// وقتی الان اگر از پتچ استفاده می کنیم می تونی همش را کامنت کنی و یکیش را زا کامنت باز کنی تا مثلا یکیش را تعغیر بدی ولی وقتی از پت استفاده می کنی حتمی باید همش را بنویسی
//     userId: 100,
    id: 100, //این ایدی را باید بنویسیم چون اینجا چون می خواییم تعغیراتی انجام بدیم  و برای اینکه ما وقتی تعغیری یا حذفی انجام می دهیم باید این را بنویسیم تا سرور وو بدونه چی را داره دستکاری می کنه
    title: "this is title of post!",
    body: "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo veli",
  }),
})
  .then((res) => {
    if (!res.ok) {
      throw new Error("یه چیزی میلنگه احمق جون");
    }
    return res.json();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    errorMessage.textContent = err.message;
  });

//اولین تفاوت متد پوت وپست توی اینه  که باید یوارال ات یه قدم جزعی تر باشه دقیقا همون پستی که می خوایی تعغیر بدی را  ایدی مورد نطر را باید بدیم
//بقیه رو جونت در بره خودت با دقت دقت نگاه کن به بالا با ارامش یواش یواش با دقت برو جلو
//مثلا اید متد را بگیم پوت و هدرز را دست نزنیم وووو
//وقتی از پوت استفاده می کنیم باید بیاییم تمام متد هام ثل بادی تیتل وو را بایییم درون بادی بنویسیم بعد تعغیری بدیم چون ار پوت استفاده کریدیم
//

// 📕 DELETE
// fetch("https://jsonplaceholder.typicode.com/posts/100", {
//   // در حذف کردن باید یو ار ال تو خاص باشه و مستقیم باید بگی مثلا محصولی که ایدی 100 داره را حذف کنه
//   method: "DELETE",
// })
//   .then((res) => {
//     if(!res.ok){
//       throw new Error("🤷‍♂️هوی مای برادر نت ت رو چک کن اگر از اون نبود از سروره⚠")
//     }
//     return res.json()}
//   )
//   .then((result) => {
//     console.log(result);
//   }).catch((err)=>console.error(err.message))
//نتیجه می بینیم که یک ابجکت خالی هست چون عملیات حذف کردن درست انجام شده و چیزی برای نمایش نیست

//📗 AXIOS
//اول با فتچ این انجام می دهیم بعد با اکیوز که تفاوتشون را هم ببینیم
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//with Axios from get
//در قدم اول باید وصلش کنیم به پروژه مون که من در پایین با سی دی ان وصل کردم
// axios.get("https://jsonplaceholder.typicode.com/users")
// .then((res) => console.log(res.data))      //تفاوت اولشون اینه که با اکسییوز دیگه لازم نیست بیاییم اون دات دن و تبدیل کردن به  شی قابل خوندن برای جاوااسکریپت تبدیل کنیم می تونیم خیلی ساده تر از قبل فقط این را بنویسیم  برای اینکه بفهمی اون دیتا را چرا بعد ریس دات گذاشتیم اون دیتا را بردار نتیجه را بین و بعد دوباره بزارش سر جاش

//⚡post with fetch & axios⚡
//fatch📊
// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     name: "mohammad khar",
//     phone: "091111111111211"
//   })
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))

//axios📊
// axios.post('https://jsonpaceholder.typicode.com/users' , {
//       name: "mohammad khar",
//      phone: "0911111111"
// }).then((res) => console.log(res.data)).catch((err) => console.error("errr :" , err.message))

//   PUT (ویرایش کامل یک رکورد)

// 📌 وقتی از PUT استفاده می‌کنی یعنی کل داده قبلی رو با داده جدید جایگزین می‌کنی.

// import axios from "axios";

// مثال: آپدیت کامل یک پست
// axios.put("https://jsonplaceholder.typicode.com/posts/1", {
//   id: 1,
//   title: "عنوان جدید",
//   body: "این متن جدید است",
//   userId: 1,
// })
// .then(response => {
//   console.log("PUT response:", response.data);
// })
// .catch(error => {
//   console.error("Error with PUT:", error);
// });

// 2. PATCH (ویرایش بخشی از رکورد)

// 📌 وقتی فقط می‌خوای یه بخش خاصی از داده تغییر کنه از PATCH استفاده می‌کنیم.

// مثال: فقط عنوان پست رو تغییر بدیم
// axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
//   title: "عنوان جدید با PATCH",
// })
// .then(response => {
//   console.log("PATCH response:", response.data);
// })
// .catch(error => {
//   console.error("Error with PATCH:", error);
// });

// 3. DELETE (حذف رکورد)

// 📌 برای پاک کردن یک داده از سرور.

// مثال: حذف یک پست
// axios.delete("https://jsonplaceholder.typicode.com/posts/1")
// .then(response => {
//   console.log("DELETE response:", response.data); // معمولا چیزی برنمی‌گردونه
// })
// .catch(error => {
//   console.error("Error with DELETE:", error);
// });

// 🔑 نکته‌ها:

// PUT → جایگزین کردن کل داده

// PATCH → تغییر بخشی از داده

// DELETE → حذف داده

//

//ایسینگ واونت دقیقا جاگزین دن می باسد مثل بالااکسییوز که جایگزین فتچ شد

//get request with then   ⛔

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))

//وقتی از ایسینگ استفاده می کنیم باید درون فانکشن عملیات ها را انجام بدیم❗❗👈🏻👉🏿👈🏻👈🏻👈🏻👈🏻❗❗☢❗
//get request with async/await    ✅
// async function gettodo() {   //الان وقتی این ایسینگ را گذاشتیم باعث شد که این فانکشن ما زا نوع ناهمزمان بشه و ایسینگ بشه
  // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");  //یعنی می گم قبل از اینکه درخواست را بزنی و کد های بعدی را فراخوانی کنی  بیا صبر کن تا  درخواست قشنگ از طرف سرور دریافت بشه  بعد کد های بعدی را بخون
//   const json = await res.json();
//   console.log(json);
// }
// gettodo()

//حالا با اروفانکشن ببین چطوری می نویسیم
// const gettodo = async () => {    //وقتی تو میایی از ارو فانکشن استفاده می کنی برای عملیات ایسینک باید کلمه ایسینک را به روبرو با دقت دقت نگاه کن باید اونجاد بزاریم یعنی قبل از ورودی ها وپارامتر ها ی فانکشن می نویسیم
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");  //یعنی می گم قبل از اینکه درخواست را بزنی و کد های بعدی را فراخوانی کنی  بیا صبر کن تا  درخواست قشنگ از طرف سرور دریافت بشه  بعد کد های بعدی را بخون
//   const json = await res.json();
//   console.log(json);
// }

//عملیات ارور هندلینگ در ایسینک و اویت ها❗
// 📘  Error Handeling In Async/Await
// const texterror = document.querySelector(".error-message")
// async function gettodo() {
//   try {
//پس برای ارورر هندلینگ در ایسینک باید بیاییم محتوایی که قراره  بگیریم مثلا اون را درون ترای بنویسیم و در پایینش کتچ را بنویسیم  لطفا توجه توجه کن به نحوهی نوشتارش مثل باز و بسته شدنش ووو
//     const res = await fetch("https://jsonplaceholder.typicode.com/todoss");

//     if(!res.ok){
//       throw new Error("error!!!!  404")
//     }

//     const json = await res.json();
//     console.log(json);
//   } catch(err) {
//     texterror.textContent = err.message
//   }
// }
// gettodo();

//

//استفاده از حلقه فور در استفاده از ایسینک
//Using Async/Await inside conditions or loops
// async function loadUser(userId){
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//   const user = await res.json()
//   console.log(user)
// }
// loadUser(8)

// for(let i = 1; i <= 3; i++){
//   loadUser()
// }

//حالا استفاده از حلقه فور اف در ایسینک احمق جون لطفا بادقت به کد ها نگاه کن

// const errtext = document.querySelector(".error-message")
// async function loadUser(userIds) {
//   for (let id of userIds) {
//     try {
//       const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       if (!res.ok) { // اگه پاسخ خطا باشه (مثل 404 یا 500)
//         throw new Error("خطا در دریافت اطلاعات کاربر " + id)
//       }
//       const data = await res.json()
//       console.log(data)
//     } catch (err) {
//       errtext.textContent = err.message
//     }
//   }
// }

// loadUser(["ss", 4, 6])

//

// 📘 Multiple Reqests
// async function getSlowly(){
//     console.time("Slow")   // ما با قرار دادن این دو تا که یکیش بالا هست یکیش پایین میاییم لاگ می گیریم که در چه زمانی این درخواست هل انجام شد و زمان برده
//     const todoResponse = await fetch("https://jsonplaceholder.typicode.com/todos/10");
//     const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/6");

//     const todo = await  todoResponse.json()
//     const user = await  userResponse.json()
//     console.log(todo)
//     console.log(user)
//     console.timeEnd("Slow")    // ما با قرار دادن این دو تا که یکیش بالا هست یکیش پایین میاییم لاگ می گیریم که در چه زمانی این درخواست هل انجام شد و زمان برده
// }
// getSlowly()
//الان ما این بالا هر چی نوشتیم را کانت می کنیم و می خواییم راه سرعی تر بگیم برای اینکه درخواست وو اجرا بشه در راه بالایی که با ایسینک واویت بود میومد درخواست هامون یکی یکی به به سرور های ارسال می شد و دوبرابر می شد زمان ارسال درخواست اوردن برای ما

// async function  quickly(){
//     console.time("time")
//     const [todoResponse , userResponse] = await Promise.all([  //ما برای اینکه درخواستامون موازی و باهم زده بشوند و یکی یکی زده نشوند میاییم در قالب ارایه می نویسیم
//          fetch("https://jsonplaceholder.typicode.com/todos/10") ,   //ردیفی قرار دادن مهمه چون بالا اولی که مربوط به تودو بود نوشته بودمیم اینجا هم اولین چیزی که می نویسیم مربوط به اولی هست
//          fetch("https://jsonplaceholder.typicode.com/users/6")
//     ])
//         const todo = await  todoResponse.json()
//         const user = await  userResponse.json()

//         console.log(todo , user)
//         console.timeEnd("time")
// }
// quickly()

//توی موقعیت هایی که بیشتر از یدونه درخواست  خواستی به سمت سرور بفرستی

////    ⚡🔴❗  بلاخره تمام شد با 2500 کد خدا قوت ❗🔴⚡
