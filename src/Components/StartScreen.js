function StartScreen({ numQuestions, dispatch, highscore }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <h3>The highscore is {highscore} points</h3>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="btn btn-ui"
      >
        Let's start already!! I'm ready 😎
      </button>
    </div>
  );
}

export default StartScreen;
