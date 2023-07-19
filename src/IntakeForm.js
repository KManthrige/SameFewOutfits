import { useState } from "react"

export default function IntakeForm() {
    const [addNew, setAddNew] = useState ({
        destination: "",
        sights: "",
        pictures: "",
        comments: "",
    })

    const handleIntake = (event) => {
        setAddNew ((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const addIntake = () => {
        console.log("Enter")
    }


    return (
        <>
        <input name="destination" className="destination" placeholder="Destination" onChange={handleIntake} value={addNew.destination}/>
        <input name="sights" className="sights" placeholder="Sights Visited" onChange={handleIntake} value={addNew.sights}/>
        <input name="pictures" className="pictures" placeholder="Pictures" onChange={handleIntake} value={addNew.pictures}/>
        <input name="comments" className="comments" placeholder="Comments" onChange={handleIntake} value={addNew.comments}/>
        <button onClick={addIntake}>Enter</button>

        
        </>
    )
}