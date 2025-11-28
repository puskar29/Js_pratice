function getAverage(scores){
  var total = 0;
  for(var i=0; i<scores.length; i++){
    total += scores[i];
  }
  return total / scores.length;
}

function getGrade(score){
  if(score===100){
    return "A+";
  }
  else if(score >=90){
    return "A";
  }
  else if(score >= 80){
    return "B";
  }
  else if(score >= 70){
    return "C";
  }
  else if(score >= 60){
    return "D";
  }
  else{
    return "F";
  }
}

function hasPassingGrade(score){
  var grade = getGrade(score);
  if(grade === "F"){
    return false;
  }
  else {
    return true;
  }
}

function studentMsg(scores, studentScore){
  var average = getAverage(scores);
  var grade = getGrade(studentScore);
  var passed = hasPassingGrade(studentScore);

if(passed){
  return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
}
  else{
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
}
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));;
console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]));
console.log(getAverage([10, 20, 30, 40, 55, 65, 75, 83]));
console.log(getAverage([10, 20, 30, 40, 50, 60, 70, 97]));