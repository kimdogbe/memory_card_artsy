import ArtCard from "./ArtCard";

export default function GameSection({ difficulty='easy' }) {
  return <div className="game-section">
    <h2>Select a character you haven't picked yet</h2>
    <div className="cards">
      <ArtCard />
    </div>
  </div>
}