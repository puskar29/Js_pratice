function generatePassword(length){
  let character = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()`;
  let result = "";

  for(let i=0; i<length; i++){
    const randomIndex = Math.floor(Math.random() * character.length);
    result += character[randomIndex];
  }
  return result;
}

let password = generatePassword(7);
console.log(`Generated password: ${password}`);
