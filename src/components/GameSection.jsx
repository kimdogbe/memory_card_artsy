import { useState } from "react";
import ArtCard from "./ArtCard";

export default function GameSection({ difficulty='easy' }) {
  const [selected, setSelected] = useState([]);
  const [currentSelection, setCurrentSelection] = useState('');

  return <div className="game-section">
    <h2>Select a character you haven't picked yet</h2>
    <div className="cards">
      <ArtCard />
      <ArtCard />
      <ArtCard />
      <ArtCard />
      <ArtCard />
      <ArtCard />
      <ArtCard />
      <ArtCard />
      <ArtCard />
    </div>
  </div>
}