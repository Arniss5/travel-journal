
import mapIcon from "./images/map-icon.png"

export default function Card(props) {
    

    return (

        <div className="card">
            <img src={props.imageUrl} alt={props.title} className="card--img"></img>
            <section className="card--info">
                <div className="location">
                    <img src={mapIcon} alt="">
                    </img>
                    <span className="country">{props.location}</span>
                    <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h3>{props.title}</h3>
                <div className="dates">
                    {props.startDate} - {props.endDate}
                </div>
                <p className="descripton">{props.description}</p>
            </section>
        </div>

    )
}

// id: 1,
//         title: "Mount Fuji",
//         location: "Japan",
//         googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//         startDate: "12 Jan, 2021",
//         endDate: "24 Jan, 2021",
//         description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//         imageUrl: "https://source.unsplash.com/WLxQvbMyfas"