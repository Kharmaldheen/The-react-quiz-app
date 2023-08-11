function Progress({
  questionIndex,
  numQuestions,
  points,
  totalPoints,
  answer,
}) {
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
