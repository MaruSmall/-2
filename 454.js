function factorial(n) {
  if ((n === 0) || (n === 1))
    return 1;
  else
    return (n * factorial(n - 1));
}

 var n,r;
 n=prompt("Введите число");
 r=factorial(n);
 console.log(r);