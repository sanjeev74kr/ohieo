import { heart, customers, smiley, rating } from '../../assets/icons'
function Section7() {
    return (
        <div className="section-7">
            <div className="section-7-column">
                <img className='section-7-img' src={heart} alt='heart' />
                <p className='section-7-stats'>100%</p>
                <div className='stats-line'></div>
                <p className='section-7-title'>CUSTOMER STATISFACTION</p>
            </div>
            <div className="section-7-column">
                <div className='section-7-img-container'>
                    <img className='section-7-img' src={customers} alt='customers' />
                    <img className='section-7-img' src={customers} alt='customers' />
                    <img className='section-7-img' src={customers} alt='customers' />
                </div>
                <p className='section-7-stats'>5000+</p>
                <div className='stats-line'></div>
                <p className='section-7-title'>CUSTOMERs</p>
            </div>

            <div className="section-7-column">
                <img className='section-7-img' src={smiley} alt='smiley' />
                <p className='section-7-stats'>1,00,000+</p>
                <div className='stats-line'></div>
                <p className='section-7-title'>MEALS SERVED</p>
            </div>

            <div className="section-7-column">
                <div className='section-7-img-container'>
                    <img className='section-7-img' src={rating} alt='rating' />
                    <img className='section-7-img' src={rating} alt='rating' />
                    <img className='section-7-img' src={rating} alt='rating' />
                    <img className='section-7-img' src={rating} alt='rating' />
                    <img className='section-7-img' src={rating} alt='rating' />
                </div>
                <p className='section-7-stats'>4.8</p>
                <div className='stats-line'></div>
                <p className='section-7-title'>RATING</p>

            </div>


        </div>
    )
}

export default Section7;