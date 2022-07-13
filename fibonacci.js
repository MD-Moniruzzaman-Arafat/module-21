function fibonacci(n) {
    var fibo = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 2] + fibo[i - 1];
    }
    return fibo;
}
var result = fibonacci(10);
console.log(result);