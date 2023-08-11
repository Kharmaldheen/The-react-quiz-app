import { useQuiz } from "../context/hookes/QuizContext";

function Option({ question }) {
  const { answer, dispatch } = useQuiz();
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          onClick={(e) =>
            dispatch({
              type: "newAnswer",
              payload: i,
            })
          }
          key={option}
          disabled={hasAnswered}
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswered
              ? i === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
