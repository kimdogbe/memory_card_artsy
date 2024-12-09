import Laminal from "../assets/laminal.jpg"

export default function ArtCard({ artId, imgSrc=Laminal, artwork="Laminal", artist="Ama Dogbe", medium="3d Art", date="2019", clickHandler}) {
  return <button onClick={() => {clickHandler(artId)}} className="art-card">
    <img className="artImg" src={imgSrc} alt="art piece"/>
    <div>
      <p>Artwork: {artwork}</p>
      <p>Artist: {artist}</p>
      <p>Type: {medium}</p>
      <p>Date: {date}</p>
    </div>
  </button>
}