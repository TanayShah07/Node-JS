var arguments=process.argv
function add(a,b){
    return parseInt(a)+parseInt(b)
}
var sum=add(arguments[2],arguments[3])
console.log("Sum is: ",sum)