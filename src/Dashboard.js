import Map from "./Map"

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

    // const fetchMap = async() => {
    //     try {
    //         const apiKey = process.env.REACT_APP_API_KEY
    //         const response = await fetch()
    //     } catch (error) {

    //     }
    // }

    return (
        <>
            <div className="card"></div>
            <button onClick={getDestinationsData} >get destinations</button>
            <script src="https://js.api.here.com/v3/3.1/mapsjs-core.js"
                type="text/javascript" charset="utf-8"></script>
            <script src="https://js.api.here.com/v3/3.1/mapsjs-service.js"
                type="text/javascript" charset="utf-8"></script>

                <Map/>
        </>
    )
}