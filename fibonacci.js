const fib = [0, 1, 1];
const fibonacci = (x, memo = {}) => {
  if (x <= 20 && x >= -1) {
    if (x in memo) {
      return memo[x];
    }
    if (x <= 2) {
      return 1;
    }
    memo[x] = fibonacci(x - 1, memo) + fibonacci(x - 2, memo);
    // console.log(memo[x]);
    fib.push(memo[x]);
    return memo[x];
  } else {
    alert("Please Put A Number Less Than Or Equal To 20 And Greated Than 1");
  }
};

// fib.forEach((num) => console.log(num));

const calculate_fibonacci = () => {
  const x = document.getElementById("fibonacci").value;
  fibonacci(x);
  const res_div = document.getElementById("fibonacci_Result");
  for (let i = 0; i < x; i++) {
    console.log(fib[i]);
    res_div.innerHTML = `<br>Required Fibonacci Series: ${fib}`;
  }
};
