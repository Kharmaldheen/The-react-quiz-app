function NextButton({ dispatch, answer, numQuestions, questionIndex }) {
  if (answer === null) return null;

  if (questionIndex < numQuestions - 1)
    return (
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="btn btn-ui"
      >
        Next question please!!
      </button>
    );

  if (questionIndex === numQuestions - 1)
    return (
      <button
        onClick={() => dispatch({ type: "finishQuiz" })}
        className="btn btn-ui"
      >
        Finish Quiz
      </button>
    );
}

export default NextButton;
