import './styles.css';

export default function Cards(props, {handleTextOverlay}) {

      return (
        <>
            <div className="cards" >
                <img className="img" src={props.img} alt="pic"/>
                <div className="text-overlay">{handleTextOverlay}</div>
            </div>
        </>
    )
}