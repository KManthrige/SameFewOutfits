import { useState, useEffect } from "react";

export default function Sightseeing() {

    const [data, setData] = useState({})

    const getSightseeing = async () => {
        try {
          const response = await fetch ("api/sightseeingData")
          const data = await response.json()
          setData(data)
        } catch (error) {
          console.log("Error Fetching Data", error)
        }
      }
useEffect(() => {
    console.log(data)
}, [data])
      
    return (
        <>
              <button onClick={getSightseeing}>sightseeing</button>
              {data && data.length > 0 ?  <img src={data[4].pictures} alt="pic" width={"500"} height={"600"}/> : null}
             
        </>
    )
}