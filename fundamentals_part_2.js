var findTheSum=function sum(x,y){
    var sum=0;
    for (i=x; i<=y; i++){
        sum+=i;
    }
    console.log(sum);
}

var findTheMin=function min(array){
    var min=arr[0];
    for (i=1; i<arr.length; i++){
        if (arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}

var findTheAverage= function avg(array){
    var sum=arr[0];
    for (i=1; i<arr.length; i++){
        sum+=arr[i];
    }
    var avg=sum/arr.length;
    return avg;
}


var object1={
    findTheSum: function sum(x,y){
        var sum=0;
        for (i=x; i<=y; i++){
            sum+=i;
        }
        console.log(sum);
    },
    findTheMin: function min(array){
        var min=arr[0];
        for (i=1; i<arr.length; i++){
            if (arr[i]<min){
                min=arr[i];
            }
        }
        return min
    },
    findTheAverage: function avg(array){
        var sum=arr[0];
        for (i=1; i<arr.length; i++){
            sum+=arr[i];
        }
        var avg=sum/arr.length;
        return avg;
    },
}

var person={
    name='Lexi',
    distance_traveled=0,
    say_name: function(){
        console.log(person.name);
    },
    say_something: function(string){
        console.log("${person.name} says:${phrase}")
    },
    walk: function(){
        console.log('${person.name} is walking.');
        person.distance_traveled +=3;
    },
    run: function(){
        console.log('${person.name} is running');
        person.distance_traveled +=10;
    },
    crawl: function(){
        console.log('${person.name} is crawling');
        person.distance_traveled +=1;
    }
}
