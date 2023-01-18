export default function Card(props) {
  return (
    <section className="card">
      <img src={`${props.cards.imageUrl}`} className="card--photo"/>
      <div className="card--stats">
        <img src="../assets/map-pin.jpeg" className="card--pin"></img>
        <span className="uppercase">{props.cards.location}</span>
        <a href={props.cards.googleMapsUrl}><span className="gray">View on Google Maps</span></a>
        <h2 className="card--title">{props.cards.title}</h2>
        <p className="card--description">{props.cards.description}</p>
      </div>
    </section>
  )
}