
export default function Dashboard(){
    const getDestinationsData = async () => {
        try {
          const response = await fetch("/api/destinationsData")
          const data = await response.json()
          console.log("destinations", data)
        } catch (error) {
          console.log("Error Fetching Data", error)
        }
      }
    return (
        <>
             <div classname="card"></div>
              <button onClick= {getDestinationsData} >get destinations</button>
        </>
    )
}