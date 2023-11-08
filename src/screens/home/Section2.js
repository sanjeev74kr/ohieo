import { homeSec2BgImg } from "../../assets/images";

function Section2() {
    return (
        <section className="section-2">
            <img className="home-sec-2-bg-img" src={homeSec2BgImg} alt="background" />
            <div className="home-sec-2-text-container">
                <h2 className="home-sec-2-title">What we do?</h2>
                <p className="home-sec-2-subtitle">OHIEO is curating smiles in every bite</p>
                <p className="home-sec-2-subtitle">   OHIEO is your one-stop solution to corporate catering & special events.</p>
               <button className="clickable home-sec-2-button">Know MORE</button>
            </div>
        </section>
    )
}
export default Section2;