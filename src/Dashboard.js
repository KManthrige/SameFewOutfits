// import Map from "./Map"

export default function Dashboard() {
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
            //const city = "London"
            // const country = "England"
            const apiKey = process.env.REACT_APP_API_KEY
            console.log("api key", apiKey)
            const response = await fetch("https://api.api-ninjas.com/v1/geocoding?city=Minneapolis&country=USA", {
                headers: { 'X-Api-Key': apiKey },
            })
            const data = await response.json()
            console.log("data", data)
        } catch (error) {
            console.log("error loading api", error)
        }
    }

    return (
        <>
            <div className="card"></div>
            <button onClick={getDestinationsData} >get destinations</button>
            <button onClick={fetchMap}>Map</button>


        </>
    )
}