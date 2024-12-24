import "./GameOver.css";

const GameOver = ({ tryAgain }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={tryAgain}>Recomeçar o jogo</button>
    </div>
  );
};

export default GameOver;
