function each(arr, callback) {
  // loop through the array
  for(var i = 0; i < arr.length; i++) {
    callback(arr[i]); // invoking the callback many times... delegation!
  }
}

var _ = {
   map: function(array, callback) {
       for (var i=0; i <array.length; i++){
           arr[i]=callback(arr[i])
       }
   },
   reduce: function(array, callback, memo) {
        if (!memo){
          memo=0;
          }
         for(var i=0; i<array.length; i++){
             memo=callback(arr[i], memo);
       }
       return memo;
   },
   find: function(array, callback) {

    for (var i=0; i<array.length; i++)
    if(callback(array[i])){
        return array[i];
    }
},
   filter: function(array, callback) {
       var temp=[];
       for(var i=0; i<array.length; i++){
           if(callback(array[i])){
               temp.push(array[i]);
           }
       }
       return temp
   },
   reject: function(array, callback) {
       var temp=[];
       for(var i=0; i<array.length; i++){
           if(!callback(array[i])){
               temp.push(array[i]);
           }
       }
   }
 }

_.map(array, function callback(x){return x * 22;});
console.log(array);
console.log(_.reduce(array, function callback(x, memo){return x + memo;}, 0));
console.log(_.find(array, function callback(num){return num % 2==0;}));
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens);
var odds= _.reject([1,2,3,4,5,6], function(num){return num %2 == 0;});
console.log(odds);
