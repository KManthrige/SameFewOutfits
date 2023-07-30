import './styles.css'

export default function Cards(props) {
    const handleCards = () => {
        console.log("handle cards")
    }
    console.log("image", props)


    return (
        <>
            <div className="cards" onClick={handleCards} >cards 
            <img src={props.img} alt="Image" height="100%" width="100%"/>
            <div className="text-overlay">text on picture</div>
            </div>
        </>
    )
}