function fib() {
  var count1=0
  var count2=1
  function nacci() {
    console.log(count2)
    var temp=count1
    count1=count2
    count2=temp+count1
  }
  return nacci
}
var fibCounter = fib();
// setInterval(fibCounter, 1000)

fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
fibCounter()
fibCounter()
fibCounter()
fibCounter()
