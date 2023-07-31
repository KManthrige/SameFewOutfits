// import Map from "./Map"
import { useState } from "react"
import Cards from "./Cards"
import World from "./pictures/World.png"
import Pin from "./pictures/Pin.png"
import Suitcase from "./pictures/Suitcase.jpg"
import './styles.css';


export default function Dashboard() {

    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");

    const getDestinationsData = async () => {
        try {
            const response = await fetch("/api/destinationsData")
            const data = await response.json()
            console.log("destinations", data)
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
            console.log("data", data)
        } catch (error) {
            console.log("error loading api", error)
        }
    }

    // const handleCards = () => {
    //     console.log("handle cards")
    // }

    const handleTextOverlay = () => {
        console.log("text")
    }

    const handleCity = (event) => {
        console.log("city", event.target.value)
        setCity(event.target.value)
    }
    // const handleState = (event) => {
    //     console.log("state", event.target.value)
    //     setState(event.target.value)
    // }
    const handleCountry = (event) => {
        console.log("country", event.target.value)
        setCountry(event.target.value)
    }

    return (
        <>
            <div className="container">
                <Cards img={World} onClick={handleTextOverlay} />
                <Cards img={Pin} />
                <Cards img={Suitcase} />
            </div>
            <div>
                <h4>Find destinations</h4>
                <input className="search" placeholder="City" onChange={handleCity} />
                {/* <input className="search" placeholder="State" onChange={handleState}/> */}
                <input className="search" placeholder="Country" onChange={handleCountry} />

            </div>
            {/* <button onClick={getDestinationsData} >get destinations</button> */}
            <button onClick={fetchMap}>Search</button>

        </>
    )
}