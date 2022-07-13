var number = [10, 50, 45, 69, 75, 86, 94];
function sum(n) {
    var sum = 0;
    for (var i = 0; i < n.length; i++) {
        var element = n[i];
        sum = sum + element;
    }
    return sum;
}
var result = sum(number);
console.log(result)