import randowQuestions from "../service/randomize.js";

const getselectQuestions = () => {
    const selectQuestions = randowQuestions.splice(0, 10);
    console.log(selectQuestions);
    return selectQuestions;
};

export default getselectQuestions;