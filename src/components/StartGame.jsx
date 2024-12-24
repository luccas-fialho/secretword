import "./StartGame.css";

const StartGame = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão para começar a jogar</p>
      <button onClick={startGame}>Click here to start</button>
    </div>
  );
};

export default StartGame;
