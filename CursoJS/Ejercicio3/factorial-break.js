let result = num = 10;

while (num) { 
  if (num <= 1)
    break;

  num--;
  result *= num;
}

console.log(result);
