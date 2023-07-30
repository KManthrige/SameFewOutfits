import './styles.css';

export default function Cards(props) {
  
    console.log("image", props)

    const handleCards = () => {
        console.log("handle cards")
    }

const handleTextOverlay = () => {
    console.log("text")
}

    return (
        <>
            <div className="cards" onClick={handleCards} >cards 
            <img src={props.img} alt="pic" height="100%" width="100%"/>
            <div className="text-overlay" onChange={handleTextOverlay}>text on picture</div>
            
            </div>
        </>
    )
}