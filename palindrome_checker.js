const is_palindrome = (str) => {
  if (str.length < 1) {
    return true;
  }

  let first = str[0];
  let len = str.length;
  let last = str[len - 1];
  if (first === last) {
    str = str.slice(1, str.length - 1);

    return is_palindrome(str);
  } else {
    return false;
  }
};

const check_palindrome = (str) => {
  let len = str.lenght;
  len % 2 == 0 ? "Even Palindrome" : "Odd Palindrome";

  if (is_palindrome(str)) {
    console.log(len);
  } else {
    console.log("Not a Palindrome");
  }
};

let str = "ssee2344s";
str = str.toLowerCase();
check_palindrome(str);
