const factorial = (x, memo = {}) => {
  if (x <= 10) {
    if (x in memo) return memo[x];
    if (x <= 1) return 1;
    memo[x] = x * factorial(x - 1);
    return memo[x];
  } else {
    alert("Please Put A Number Less Than Or Equal To 10");
  }
};

const calculate_factorial = () => {
  const x = document.getElementById("factorial").value;
  const res = factorial(x);
  document.getElementById(
    "factorial_Result"
  ).innerHTML = `<br>Factorial For The Input is: ${res}`;
  console.log(res);
};
