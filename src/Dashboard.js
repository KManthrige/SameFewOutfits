// import Map from "./Map"
import { useEffect, useState } from "react"
import Cards from "./Cards"
import World from "./pictures/World.png"
import Pin from "./pictures/Pin.png"
import Suitcase from "./pictures/Suitcase.jpg"
import './styles.css';


export default function Dashboard() {

    const [results, setRestults] =useState([]);
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [destinationCount, setDestinationCount] = useState(0);

    const getTotDestinations = async () => {
        try {
            const response = await fetch("/api/sightseeingData/totDestinations")
            const data = await response.json()
            console.log("count destinations", data)
            setDestinationCount(data.count)
        } catch (error) {
            console.log("Error Fetching Data", error)
        }
    }

    const fetchMap = async () => {
        try {
            const apiKey = process.env.REACT_APP_API_KEY
            const response = await fetch(`https://api.api-ninjas.com/v1/geocoding?city=${city}&country=${country}`, {
                headers: { 'X-Api-Key': apiKey },
            })
            const data = await response.json()
            console.log(data)
            setRestults(data)
        } catch (error) {
            console.log("error loading api", error)
        }
    }

    const handleCity = (event) => {
        console.log("city", event.target.value)
        setCity(event.target.value)
    }

    const handleCountry = (event) => {
        console.log("country", event.target.value)
        setCountry(event.target.value)
    }

useEffect (() => {
    console.log("number of destinations", destinationCount)
}, [destinationCount])
 
    return (
        <>
            <div className="container">
                <Cards img={World}></Cards>
                <Cards img={Pin}/>
                <Cards img={Suitcase} />
            </div>
            <button onClick={getTotDestinations}>Total Destinations</button>
            <div>
                <h2>Total Destinations: {destinationCount}</h2>
            </div>
            <div>
                <h4>Find destinations</h4>
                <input className="search" placeholder="City" onChange={handleCity} />
                <input className="search" placeholder="Country" onChange={handleCountry} />
            </div>
            <div>
                <ul>
                    {results.map((item) => (
                        <li key={item.id}>{item.name}, {item.state}, {item.country}</li>
                    ))}
                </ul>
            </div>
            {/* <button onClick={getDestinationsData} >get destinations</button> */}
            <button onClick={fetchMap}>Search</button>

        </>
    )
}