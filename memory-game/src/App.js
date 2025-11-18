import { ModifiedPathsSnapshot } from 'mongoose';
import './App.css';
import { useState } from 'react';

const cardImages = [
  {"src": "../public/img/jsP.png"},
  {"src": "../public/img/React.svg"},
  {"src": "../public/img/TMJT.png"},
  {"src": "../public/img/TSS.svg"},
  {"src": "../public/img/nodejs.png"},
  {"src": "../public/img/nextjs.jpg"},
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    
    setCards(shuffleCards);
    setTurns(0)
  }

console.log(cards, turns)


  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
