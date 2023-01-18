export default function Card(props) {
  return (
    <section className="card">
      
      <img src={`${props.cards.imageUrl}`} className="card--photo"/>
     
      <div className="card--stats">
        <img src="../assets/map-pin.jpeg" className="card--pin"></img>
        <span className="uppercase">{props.cards.location}</span>
        <a class="card--link" href={props.cards.googleMapsUrl}>View on Google Maps</a>
        <h2 className="card--title"><span className="bold">{props.cards.title}</span></h2>
        <p className="card--dates"><span className="bold">{props.cards.startDate} - {props.cards.endDate}</span></p>
        <p className="card--description">{props.cards.description}</p>
      </div>

    </section>
  )
}