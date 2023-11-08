import { buffetCatering, buffet2, buffet3, buffet4, buffet5 } from "../../assets/images";

function Section3() {
    return (
        <div className="section-3">
            <div className="sec-3-image-container">
                <img className="sec-3-img" src={buffetCatering} alt="buffetCatering" />
                <img className="sec-3-img" src={buffet2} alt="buffet" />
                <img className="sec-3-img" src={buffet3} alt="buffet" />
                <img className="sec-3-img" src={buffet4} alt="buffet" />
                <img className="sec-3-img" src={buffet5} alt="buffet" />
            </div>
        </div>
    )
}

export default Section3;