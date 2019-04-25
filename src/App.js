import React from "react";
import PaymentScorer from "./components/PaymentScorer";

// const App = () => {
//   const [playerNames, setPlayerNames] = useState();
//   const [prevailing, setPrevailing] = useState();
//   const [windPlayers, setWindPlayers] = useState();
//   const [currentRound, setCurrentRound] = useState();

//   const loadData = () => {};

//   const handleStartNewGame = playerNames => {
//     setPrevailing("E");
//     setWindPlayers({ E: 0, N: 1, W: 2, S: 3 });
//     setCurrentRound(1);
//     setPlayerNames(playerNames);
//   };

//   return currentRound ? (
//     <div>Loaded some Data!</div>
//   ) : (
//     <NewGame onStartNewGameClick={handleStartNewGame} />
//   );
// };

const App = () => {
  return <PaymentScorer />
}

export default App;
