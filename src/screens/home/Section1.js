import {ellipse1,ellipse2,ellipse3,welcomeGesture} from '../../assets/images'

function Section1(){
    return(
        <section className="welcome-section">
                <div className="welcome-left-part">
                    <p className="welcome-text">REVOLUTIONISING<br/> THE WAY OF<br/> CATERING</p>
                    <button className="explore-menu-button clickable">Explore Menu</button>
                </div>
                <div className="welcome-right-part">
                  <img className="ellipse3" src={ellipse3} alt="rotating ellipse"/>
                  <img className="ellipse2" src={ellipse2} alt="rotating ellipse"/>
                  <img className="ellipse1" src={ellipse1} alt="rotating ellipse"/>
                  <div className="yellow-card"></div>
                  <div className="yellow-card-text">OHEIO</div>
                  <img className="welcome-gesture" src={welcomeGesture} alt="welcome-gif"/>
                </div>
            </section>
    )

}

export default Section1;