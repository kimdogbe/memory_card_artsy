import Laminal from "../assets/laminal.jpg"

export default function ArtCard({ imgSrc=Laminal, artwork="Laminal", artist="Ama Dogbe", medium="3d Art", date="2019"}) {
  return <button className="art-card">
    <img src={imgSrc} alt="art piece"/>
    <div>
      <p>Artwork Name: {artwork}</p>
      <p>Artist: {artist}</p>
      <p>Medium: {medium}</p>
      <p>Date: {date}</p>
    </div>
  </button>
}