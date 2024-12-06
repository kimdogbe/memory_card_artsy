import { useState, useEffect } from "react";
import ArtCard from "./ArtCard";

const endpoint = "https://api.artic.edu/api/v1/artworks/";
const imageEndpoint = "https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg"

const artists = [
  'atta-kwami', 'salvador-dali',
  'pablo-picasso', 'leonardo-da-vinci',
  'ibrahim-mahama', 'vincent-van-gogh',
  'lakwena-maciver', 'damien-hirst',
  'banksy', 'azadeh-nia',
  'roy-lichtenstein', 'kaws'
]

const chicagoArtworks = [
  '89503', '129884', '28560', '6565', '80607', '229396',
  '117319', '154129', '182761', '150052', '62315', '118718',
  '210471', '117266', '237892', '2567', '9503', '249299'
];

export default function GameSection({ difficulty='easy' }) {
  const [selected, setSelected] = useState([]);
  const [currentSelection, setCurrentSelection] = useState('');

  const [artList, setArtList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        for (const artwork of chicagoArtworks) {
          const response = await fetch(endpoint + artwork);
          const data = await response.json();
          setArtList([...artList, data]);
          console.log(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
