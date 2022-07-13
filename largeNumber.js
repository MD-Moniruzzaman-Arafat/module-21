var number = [10, 50, 45, 69, 75, 86, 94];

function largeNumber(n) {
    var large = 0;
    for (var i = 0; i <= n.length; i++) {
        if (n[i] > large) {
            large = n[i];
        }
    }
    return large;
}
var result = largeNumber(number);
console.log(result)