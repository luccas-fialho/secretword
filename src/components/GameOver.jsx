import "./GameOver.css";

const GameOver = ({ tryAgain, score, word }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <h2>
        Your score was: <span>{score}</span>
      </h2>
      <p>The word was: <span>{word}</span></p>
      <button onClick={tryAgain}>Retry game</button>
    </div>
  );
};

export default GameOver;
