import { shorbanner,partyWrap,officeMeals } from "../../assets/images";

function Section4() {
   return (
        <div className="section-4">
            <div className="sec-4-image-container">
                <img className="sec-4-img" src={shorbanner} alt="shorbanner" />
                <img className="sec-4-img" src={partyWrap} alt="partyWrap" />
                <img className="sec-4-img" src={officeMeals} alt="officeMeals" />
            </div>

        </div>
    )
}

export default Section4;