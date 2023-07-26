import { useState, useEffect } from "react"

export default function IntakeForm() {
    const [addNew, setAddNew] = useState({
        destination: "",
        sights: "",
        comments: "",
    })
    const [base64String, setBase64String] = useState("")

    const handleIntake = (event) => {
        setAddNew((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))

    }

    const handlePictures = (event) => {
        const file = event.target.files[0]
        if (file) {
            convertToBase64(file)
        }
    }

    const convertToBase64 = (data) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result
            setBase64String(base64)
        }
        reader.readAsDataURL(data)
    }

    const addIntake = async () => {
        const combination = {
            //...addNew
            destination: addNew.destination,
            sights: addNew.sights,
            comments: addNew.comments,
            base64String
        }
        console.log("combination", combination)

        try {
            const response = await fetch("/api/addIntake", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(combination)
            })
            const data = await response.json()
            console.log("Post Data", data)
        } catch (error) {
            console.log("Error in POST data", error)
        }

    }

    useEffect(() => {
        console.log("track new", addNew)
    }, [addNew])

    useEffect(() => {
        console.log("base64 tracking", base64String)
    }, [base64String])

    return (
        <>
        <div>This is the intake form</div>
            <div className="instructions">Complete and submit this form to save a new travel memory</div>
            <div>Destination</div>
            <input name="destination" className="destination" placeholder="Destination" onChange={handleIntake} value={addNew.destination} />
            <div>What did you see?</div>
            <input name="sights" className="sights" placeholder="Sights Visited" onChange={handleIntake} value={addNew.sights} />
            {/* <input name="pictures" className="pictures" placeholder="Pictures" onChange={handleIntake} value={addNew.pictures} /> */}
            <div>Share your experience!</div>
            <input name="comments" className="comments" placeholder="Comments" onChange={handleIntake} value={addNew.comments} />
            <div>Upload pictures</div>
            <input type="file" id="button" onChange={handlePictures} />
            <br />
            <br />
            <br />
            <button onClick={addIntake}>Submit</button>




        </>
    )
}