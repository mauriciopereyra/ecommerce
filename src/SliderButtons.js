import './SliderButtons.css'

const SliderButtons = (props) => {
    return (<div className="slider-button-group">
        <div className="slider-button"
        onClick={() => props.prevPage()}
        >{"<"}</div>
        <div className="slider-button"
        onClick={() => props.nextPage()}
        >{">"}</div>
    </div>)
}

export default SliderButtons