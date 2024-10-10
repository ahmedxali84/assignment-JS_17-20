function myFunction() {
    var a = prompt("How Many Array's Elements??")
    var arr = []
    for (var i = 0; i < a; i++) {
        arr[i] = prompt("Array" + (i + 1) + ":")
    }
    console.log(arr)
}
function multiplicationFunction() {
    var multi = prompt("Enter Your Number : ");
    var multi2 = prompt("Enter the second number:");
    console.log("Multiples of " + multi + "From 1 to" + multi2 + ":");
    for (var i = 1; i <= multi2; i++) {
        if (i % multi == 0) {
            console.log(i)
        }
    }
}
