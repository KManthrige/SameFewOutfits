import { useState, useEffect } from "react";

export default function Sightseeing() {

  const [gallery, setGallery] = useState([])

  const getGallery = async () => {
    try {
      const response = await fetch("api/sightseeingData")
      const gallery = await response.json()
      setGallery(gallery)
    } catch (error) {
      console.log("Error Fetching Data", error)
    }
  }

  const displayGallery = () => {
    console.log("display gallery", gallery)
  }

  useEffect(() => {
    console.log(gallery)
  }, [gallery])

  return (
    <>
      <button onClick={getGallery}>get</button>
      <button onClick={displayGallery}>display</button>
      {/* {data && data.length > 0 ?  <img src={data[4].pictures} alt="pic" width={"500"} height={"600"}/> : null} */}
      <div>

        <table>
          <thead>
            <tr>
              <th>Destination</th>
              <th>Sights Explored</th>
              <th>Picture</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {gallery.map((item) =>
              <tr key={item.id}>
                <td>{item.destination}</td>
                <td>{item.sights}</td>
                <td>{item.pictures ? (
                  <img src={item.pictures} alt="pic" width="100%" height="100%"/>
                ) : (
                  "No Image Available"
                )
              }</td>
                <td>{item.comments}</td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </>
  )
}