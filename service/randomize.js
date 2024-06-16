import turingQuestions from "../data/data.js";

const randowQuestions = turingQuestions.sort(() => Math.random() - 0.5);

export default randowQuestions;