import turingQuestions from "../data/data";

const randowQuestions = turingQuestions.sort(() => Math.random() - 0.5);

export default randowQuestions;