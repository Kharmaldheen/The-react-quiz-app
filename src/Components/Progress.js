import { useQuiz } from "../context/hookes/QuizContext";

function Progress() {
  const { numQuestions, questionIndex, points, totalPoints, answer } =
    useQuiz();
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={questionIndex + Number(answer !== null)}
      />
      <p>
        Question <strong>{questionIndex + 1}</strong>/{" "}
        <strong>{numQuestions}</strong>
      </p>
      <p>
        <strong>{points}</strong>/ <strong>{totalPoints}</strong>
      </p>
    </header>
  );
}

export default Progress;
