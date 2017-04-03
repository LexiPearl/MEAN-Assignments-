module.exports = function (){
  return {
    add: function(num1, num2) {
         console.log("the sum is:", num1+num2)
    },
    multiply: function(num1, num2) {
         console.log("the product is:", num1*num2)
    },
    square: function(num) {
         console.log("the square is:", num*num)
    },
    random: function(num1, num2) {
         console.log("random is:", Math.floor(Math.random() * (num2-num1))+ num1)
    },
    twenty_one: function(num1, num2){
        console.log("twenty_one: ", (num1-num2 +21))
    }
  }
};
