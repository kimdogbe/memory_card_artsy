import { useState, useEffect } from "react";
import ArtCard from "./ArtCard";

const endpoint = "https://api.artic.edu/api/v1/artworks/";
const imageEndpoint = "https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg";

const chicagoArtworks = [
  '89503', '129884', '28560', '6565', '80607', '229396',
  '117319', '154129', '182761', '150052', '62315', '118718',
  '210471', '117266', '237892', '2567', '9503', '249299'
];

export default function GameSection({ difficulty='Easy', currentScore, highScore, incrementScore, setHighScore, resetScore }) {
  const [selected, setSelected] = useState([]);
  const [gameover, setGameover] = useState(false);

  const [artList, setArtList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const artworks = difficulty === 'Easy' ? chicagoArtworks.slice(0, 8) : 
                   difficulty === 'Medium' ? chicagoArtworks.slice(0, 12) :
                   chicagoArtworks;

  useEffect(() => {
    const fetchUsers = async () => {
      let tempList = []
      try {
        for (const artwork of artworks) {
          const response = await fetch(endpoint + artwork);
          const data = await response.json();
          const body = data.data;
          tempList = 
            [...tempList, 
              { id: body.id, 
                name: body.title,
                artist: body.artist_title,
                type: body.department_title,
                image: imageEndpoint.replace('{identifier}', body.image_id)
              }
            ];
          console.log(data.data);
        }
        setArtList(tempList);
        console.log(artList);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array means this runs once on mount

  function handleSelection(artId) {
    console.log(artId);
    if (selected.includes(artId)) {
      setGameover(true);
    } else {
      setSelected([...selected, artId]);
      incrementScore();
    }
  }

  function handleNewGame() {
    setSelected([]);
    resetScore();
    setGameover(false);
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (gameover) {
    if (currentScore > highScore){
      setHighScore(currentScore);
    }
    return <div>
      <h2>GameOver final score is {currentScore}</h2>
      <button onClick={handleNewGame}>New Game</button>
    </div>
  }

  return <div className="game-section">
    <h2>Select a piece you haven't picked yet</h2>
    <div className="cards">
      {shuffle(artList).map(art => <ArtCard 
        key={art.id} 
        artId={art.id}
        artwork={art.name} 
        artist={art.artist}
        medium={art.type}
        imgSrc={art.image}
        clickHandler={handleSelection}
        />)}
    </div>
  </div>
}

function shuffle(array) {
  let shuffledArray = [...array];
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return shuffledArray;
}