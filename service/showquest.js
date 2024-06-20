import randowQuestions from "./randomize.js";

const getselectQuestions = () => {
    return selectQuestions = randowQuestions.splice(0, 10); 
}

export default getselectQuestions;