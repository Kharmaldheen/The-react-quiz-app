function FinishedScreen({ points, totalPoints, highscore, dispatch }) {
  const percentage = (points / totalPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😊";
  if (percentage >= 0 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of{" "}
        <strong>{totalPoints}</strong> ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore is: {highscore} points)</p>

      <button
        onClick={() => dispatch({ type: "restartQuiz" })}
        className="btn btn-ui"
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
