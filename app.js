
// ********************************* Chap#35-38 *****************************************



// TASK  1
// function currentDate(){
// var date = new Date();
// document.write(date);
// }

// currentDate()



//  TASK 2

// function fullName(){
// var fn = prompt("enter first name")
// var ln = prompt("enter last name")
// document.write(fn + "  " + ln)
// }

// fullName()



// TASK 3

// function addNumbers(){

//     var num1 = +prompt("enter no 1");
//     var num2 = +prompt("enter no 2");
//     var totalNum = num1 + num2;
//     document.write(totalNum);
// }

// addNumbers()



// TASK 4
// function calculator() {
//     var no1 = +prompt("enter no 1");
//     var no2 = +prompt("enter no2");
//     var sym = prompt("enter what you do in calculator");
//     if (sym == "+") {
//         document.write("the addtion is :" + " " + (no1 + no2));
//     }
//     else if (sym == "-") {
//         document.write("the subtraction is :" + " " + (no1 - no2));
//     }
//     else if (sym == "*") {
//         document.write("the multiplication is :" + " " + no1 * no2);
//     }
//     else if (sym == "/") {
//         document.write("the divition  is :" + " " + no1 / no2);
//     }

// }

// calculator()


//  TASK 5

// function square() {
//     var num = +prompt("enter a number");
//     document.write(num * num );
// }
//  square()



//  TASK 6   _________> ask from sir

// function factorialize(num) {
//     return num;

//   }
//   factorialize();


//  TASK 7

// var a , b , c , i;
// function cou (){
//     a = +prompt("enter start number");
//     b = +prompt("enter last number");
//     for (i =a; i<=b; i++){
//        document.write(i);
//     }  
// }
// cou();



//  TASK 8  


// var h, b, p;
// function as(b, p) {
//     b = +prompt("enter a base");
//     p = +prompt("enter a perpendicular");
//     b = b * b;
//     p = p * p;
//     h = b + p;
//     h = h * h;
//     return h;
// }

// var d = as(h);
// document.write("hyportinuse is" + " " + d);



// TASK 9

// var width;
// var height;
// var area;
//     //  argument by value
// function are(width,height){
//     area = width*height;
//     return area;
// }
// var rec = are(2,4);
// document.write(rec);

// //   now argument by  variable
// // function are(width,height){
// //   area = 8*2;
// //   return area;
// // }
// // var rec = are(width,height);
// // document.write(rec);


// TASK 10

// function pdWord() {
//     var word = [], word2 = [];
//     word = prompt("enter a plaindrome word")
//     word2 = word.split("").reverse().join("")
    
//     if (word === word2) {
//         document.write("it's a plaindrome word")
//     }
    
//     else {
//         document.write("it's not a plaindrome word")
//     }
// }

// pdWord()


//  TASK 11












    // task 12

// function word(str){
     
//   var a = "Web Development Tutorial"
//   var b = a.replace("Web Development Tutorial","Development");
//   document.write("EXAMPLE STRING: "+a,"<br>EXPECTED OUTPUT: "+b)
// }
// word();




//  task 13


// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
// console.log(char_count('JSResourceS.com', 'o'));




// TASK 14



//for circumference
// function circum() {
//   var radius = prompt("Enter the radius of the circle");
//   var circle = 2 * Math.PI * radius;
//   alert("The circumference is "+circle+".")
// }
// circum();


//for area

//function area() {
  //var radius = prompt("Enter the radius of the circle");
  //var circle = Math.PI * radius * radius;
  //alert("The area is "+circle+".")
//}
//area();
