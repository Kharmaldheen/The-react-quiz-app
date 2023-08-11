import { useQuiz } from "../context/hookes/QuizContext";
import Option from "./Option";
function Question() {
  const { questions, questionIndex } = useQuiz();
  const question = questions.at(questionIndex);
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} />
    </div>
  );
}

export default Question;
