function mutation(arr){
  const firstStr = arr[0].toLowerCase();
  const secondStr = arr[1].toLowerCase();

  for(let char of secondStr){
    if(firstStr.indexOf(char) === -1){
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Noel", "Ole"])); 
console.log(mutation(["floor", "for"]));
console.log(mutation(["hello", "neo"]));

