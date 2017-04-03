function runningLogger(){
    console.log('I am running!');
}

function multiplyByTen(x){
    x= x *10
    return x
}
multiplyByTen(5)

function stringReturnOne(){
    return "string";
}

function stringReturnTwo(){
    return "stringtwo";
}

function caller(x{
    if (typeof(x)== 'function'){
        x()
    }
}

function myDoubleConsoleLog(x, y){
    if(typeof(x)=='function'){
        console.log(x())
    if (typeof(y)=='function'){
        console.log(y())
    }
    }
}

function caller2(x{
    console.log("starting")
    var z= setTimeout(x, 2000);
        if(typeof (x)=='function'){
            console.log("ending")
            return "interesting"
        }
}

caller2(myDoubleConsoleLog);
