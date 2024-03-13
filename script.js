' use strict '

// context this - kalit so'z bolib bajarilayotgan funksiyaga havola bo'ladi nimagadir qaram bo'ladi

// function logger(a,b){
//     console.log(this); //hech qanday o'zgaruvchi top olmagani uchun global ob'ekt ya'ni windowni qaytaradi
//     function sum(){
//         // return this.a +this.b; //bu Nan yoki undefined qaytaradi.contextni topo omaydi
//         console.log(this); // hech qanday o'zgaruvchi top olmagani uchun global ob'ekt ya'ni windowni qaytaradi
//         return a+b;  // closure ishlaydi
//     }
//     console.log(sum());
// };

// logger(3,2);

// 1-) Oddiy funkctionni contexti ya'ni this har doim window global obe'ktiga qaram bo'ladi
// ya'ni osiladi(havola bo'ladi globalga). Agarda qat'iy rejim yoqilgan bo'lsa (use strict) context undefinedga teng

// ************** ------------- ********

//Closure - funkisya ichida ishlatilayotgan o'zgaruvchini qidirish mexnizimi .Chaqirilayotgan o'zgaruvchini 
// avval funksiya ishidan yo'q bo'lsa tashqaridan ya'ni tepadan qidiradi

// const a= 4;

// function log(){
//     const a = 5;    // agar bu o'zgaruvchi yo'q bo'lsa tepadagini oladi.
//     console.log(a); 
// }
// log();

// ************* ----------------**************
// Context this obe'ktlarda nimaga teng

// Ob'ektlarni ichida context this ob'ektning o'ziga teng bo'ladi

// const obj = {
//     x:10,
//     y:15,
//     sum:function(){
//         console.log(this);
//     },
// }

// obj.sum();

// const obj = {
//     x:10,
//     y:15,
//     sum:function(){
//         function logger(){
//             console.log(this); // bunda ham window ob'ektiga teng bo'ladi
//         }
//         logger()
//     },
// }

// obj.sum();

// ***********------------****************

// 3-) Context this funkiya konstruktorda yangi obe'ktni na'munasiga teng

function Car(name,color){
    this.name = name;
    this.color = color;
    this.isAirbag = true;
}
const bmw = new Car('BMW','Black')
console.log(bmw);

