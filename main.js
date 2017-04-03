array_x=[3,5,"Dojo", "rocks", "Michael", "Sensei"];
function array(){
for (x in array_x){
    console.log(array_x[x])
}
}
array()
array_x.push(100)
array()
array_x.push(["hello", "world", "JavaScript is Fun"])
array()
// var sum=0
// for var x=; x>501, x++{
//     x+=1;
//     sum=sum+x;
// }
// console.log(sum)
// }
//
// function min()
// array=[1,5,90,25,-3,0];
// var min=arr[0]
// for x in array{
//     if arr[x]>min{
//         min=arr[x]
//     }
// }
// print min
// }
//
// function avg()
// array=[1,5,90,25,-3,0];
// var sum=arr[0]
// for x in array{
//     sum=arr[x]+sum;
//     }
// var avg=sum/arr.length
// return avg
// }
//
// var new_ninja={
//     name:'Jessica',
//     profession:'coder',
//     favorite_language:'JavaScript',
//     dojo: 'Dallas'
// }
// function navigate(new_ninja){
//     for x in new_ninja{
//         console.log(x)
//     }
// }
//
// Then:
// Move the code from inside the <script> tag into a main.js file. In the index.html change the <script> tag to: <script src = 'main.js'> Reload the index.html and open up the console on your browser.
//
// Next:
// Open your terminal (we switch from client side to ‘server side’ here!), navigate to the folder with main.js file and run nodemon main.js.
// Write a for-in loop that will navigate through the object below (or write your own object):
//
// var new_ninja = {
//  name: 'Jessica',
//  profession: 'coder',
//  favorite_language: 'JavaScript', //like that's even a question!
//  dojo: 'Dallas'
// }


// main.js
// // Set up array variable
// var x =  [3,5,"Dojo", "rocks", "Michael", "Sensei"];
//
// // Print all values in array
// for (var i = 0; i < x.length; i++) {
//   console.log(array[i]);
// }
//
// // Push the value 100 into the array
// x.push(100);
//
// // Push another array to array x
// x.push(["hello", "world", "JavaScript is Fun"]);
//
// console.log(x);
//
// // Print all the sum of numbers from 1-500
// var sum = 0;
// for (var i = 1; i < 501; i++) {
//   sum += i;
// }
// console.log(sum);
//
//
// // Find minimum value of following array
// var array = [1,5,90,25,-3,0];
//
// var min = array[0];
// for (var i = 1; i < arr.length; i++) {
//   if (arr[i] < min){
//     min = arr[i];
//   }
// }
// console.log(min);
//
// // Find average value of array
// var sum = arr[0];
// for (var i = 1; i < array.length; i++) {
//     sum  += arr[i];
// }
// console.log(sum/arr.length);
//
// // Iterate through object
// var new_ninja = {
//   name: 'Jessica',
//   profession: 'coder',
//   favorite_language: 'JavaScript',
//   dojo: 'Dallas'
// };
//
// for (var key in new_ninja){
//   console.log(key + " : " + new_ninja[key]);
// }
