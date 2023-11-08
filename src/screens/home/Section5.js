import meals from "../../utils/meals"
import { downArrow } from "../../assets/icons";

function Section5(){
    return(
        <div className="section-5">
         {meals.map((curr,index)=>
         <div className="sec-5-meals-container" key={index}>
          <img className="sec-5-img" src={curr.pic} alt="meal-img"/>
          <p className="title">{curr.title}</p>
          <p className="description">{curr.description}</p>
          <div className="option-container">
          <p className="option">{curr.option}</p>
          <img className="down-arrow" src={downArrow} alt="down-arrow" />
          </div>
          <div className="meals-bottom-container">
          <p className="price">₹ {curr.price}</p>
          <button className="add-button">ADD</button>
          </div>
          <button className="featured-button">Featured</button>
         </div>
         )}
        </div>
    )
}

export default Section5;