import "./App.css";

import { useState, useEffect, useCallback } from "react";

import { words } from "./data/words";

import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [wordsList] = useState(words);
  const [pickedCategory, setPickedCategory] = useState();
  const [pickedWord, setPickedWord] = useState();
  const [letters, setLetters] = useState();

  const pickCategoryAndWord = () => {
    const categories = Object.keys(wordsList);
    const category = categories[Math.floor(Math.random() * categories.length)];

    const word =
      wordsList[category][
        Math.floor(Math.random() * wordsList[category].length)
      ];

    console.log(category);
    console.log(word);

    return { category, word };
  };

  const startGame = () => {
    const { category, word } = pickCategoryAndWord();

    let wordLetters = word.toLowerCase().split("");

    console.log(wordLetters);

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  const tryAgain = () => {
    setGameStage(stages[0].name);
  };

  return (
    <>
      <div className="App">
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
        {gameStage === "end" && <GameOver tryAgain={tryAgain} />}
      </div>
    </>
  );
}

export default App;
