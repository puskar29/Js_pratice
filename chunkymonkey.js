//ChunkyMonkey 
function chunkArrayInGroups(arr,size){
  let result = [];
  for(let i=0; i < arr.length; i+=size){
    result.push(arr.slice(i, i+size));
  }
  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));

//FrankenSplice
function frankenSplice(array1, array2, index){
  let result = array2.slice();
  result.splice(index, 0, ...array1)
  return result;

}
  console.log(frankenSplice([1, 2, 3], [4, 5], 1));
  console.log(frankenSplice([1, 2], ["a", "b"], 1));
  console.log(frankenSplice([1, 2, 3, 4], [], 0));


//Pattern Printcd my-
  function pyramid(char, rows, inverted){
  let result  = '\n';

  for(let i=0; i<rows; i++){
    let numChars, numSpaces;

    if(inverted){
      numChars = 2*(rows-i)-1;
      numSpaces = i;
    }

    else{
      numChars = 2*i+1;
      numSpaces = rows - i -1;
    }
    let row = ' '.repeat(numSpaces) + char.repeat(numChars) + '\n';
    result += row;
  }
  return result;
}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));
