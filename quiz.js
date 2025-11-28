const questions = [
  {
    category: "Geography",
    question: "What is the capital city of Nepal?",
    choices: ["Kathmandu", "Lalitpur", "Pokhara"],
    answer: "Kathmandu"
  },

  {
    category: "History",
    question: "When did the Nepal become a republic?",
    choices: ["2006", "2008", "2010"],
    answer: "2008"
  },

  {
    category: "Nature",
    question: "What is the highest peak in the Nepal & of the world too?",
    choices: ["Mount.Everest", "Mount.Macchapuchhre", "Mount.Kanchanjunga"],
    answer: "Mount.Everest"
  },

  {
    category: "Language",
    question: "What is the official langugae of Nepal?",
    choices: ["Newari", "Magar", "Nepali"],
    answer: "Nepali",
  },

  {
    category: "Culture",
    question: "What is the main festival of Nepal?",
    choices: ["Tihar", "Dashain", "New Year"],
    answer: "Dashain"
  }
];

function getRandomQuestion(questionsArray){
 const randomIndex = Math.floor(Math.random() * questionsArray.length); 
 return questionsArray[randomIndex];
}

function getRandomComputerChoice(choicesArray){
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

function getResults(questionObj, computerChoice){
  if(computerChoice === questionObj.answer){
    return `The computer's choice is correct!`;
  }
  else{
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}

const selectedQuestion = getRandomQuestion(questions);
const computerAnswer = getRandomComputerChoice(selectedQuestion.choices);
console.log("Question: " + selectedQuestion.question);
console.log("Computer Choose: " + computerAnswer);
console.log(getResults(selectedQuestion, computerAnswer));
