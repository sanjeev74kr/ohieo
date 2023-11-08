import { corporateElement, corporateImage1 } from '../../assets/images'
function Section6() {
    return (
        <div className='section-6'>
            <img className="sec-6-bg-img" src={corporateElement} alt="corporateElement" />
            <div className='sec-6-title-container'>
                <p className='sec-6-title'>CORPORATE CATERING</p>
                <p className='sec-6-subtitle'>A SOUP-TO-NUTS FOR ALL YOUR CATERING NEEDS</p>
                <div className='sec-6-option-container'>
                    <p className='sec-6-option'>Office Meals</p>
                    <p className='sec-6-option'>Corporate Giftings</p>
                    <p className='sec-6-option'>Events</p>
                </div>
            </div>
            <div className='section-6-option-description-container'>
                <img className='sec-6-img1' src={corporateImage1} alt="corporate" />
                <p className='section-6option-description'>Whether an organization holds 50 or 10,000+ Employees, OHIEO will never fail to amaze them with their delicious range of meals. We are intent on building better workplaces through our food. Our team incorporates 50+ cloud kitchens consisting of culinarians who master the art of preparing 400+ cuisine, making our menu diversified. Our culinary partners consolidated with the power of our food technology assure that your employees experience both health and taste in our meals made with love.</p>
               
            </div>
            <button className='sec-6-button'>Enquiry</button>
            <p className='sec-6-bottom-text'>CORPORATE CATERING</p>
        </div>
    )
}
export default Section6;