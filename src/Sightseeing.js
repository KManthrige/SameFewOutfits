
export default function Sightseeing() {
    const getSightseeing = async () => {
        try {
          const response = await fetch ("api/sightseeingData")
          const data = await response.json()
          console.log("sightseeing", data)
        } catch (error) {
          console.log("Error Fetching Data", error)
        }
      }
    return (
        <>
              <button onClick={getSightseeing}>sightseeing</button>

        </>
    )
}