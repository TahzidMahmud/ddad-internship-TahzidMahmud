let fib = [];
const fibonacci = (x, memo = {}) => {
  if (x <= 20) {
    if (x in memo) {
      return memo[x];
    }
    if (x == 0) {
      memo[x] = 0;
      fib.push(0);
      return 0;
    }
    if (x == 1) {
      memo[x] = 1;
      fib.push(1);
      return 1;
    }
    memo[x] = fibonacci(x - 1, memo) + fibonacci(x - 2, memo);

    fib.push(memo[x]);
    return memo[x];
  } else {
    alert("Please Put A Number Less Than Or Equal To 20 And Greated Than 1");
  }
};

const calculate_fibonacci = () => {
  const x = document.getElementById("fibonacci").value;
  fibonacci(x);
  const res_div = document.getElementById("fibonacci_Result");

  fib = [...fib].sort((a, b) => a - b);
  fib.pop();
  res_div.innerHTML = `<br>Required Fibonacci Series: ${fib}`;

  console.log(fib);
  fib = [];
};
