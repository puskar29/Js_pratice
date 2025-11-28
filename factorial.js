var num = 10;

function factorialCalculator(num){
  let result = 1;
  if(num > 0){
    for(let i = 1; i<= num; i++){
      result = result*i;
    }
  return result;
  }
  else{
    return "Input must be integer!";
  }
}

var factorial = factorialCalculator(num);
var resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);