const x = 9;

const factorial = (x, memo = {}) => {
  if (x <= 10) {
    if (x in memo) return memo[x];
    if (x <= 1) return 1;
    memo[x] = x * factorial(x - 1);
    return memo[x];
  } else {
    console.log("Please Put A Number Less Than Or Equal To 10");
  }
};

const res = factorial(x);
console.log(res);
