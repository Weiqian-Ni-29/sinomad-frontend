import './FAQ.css';
import PropTypes from 'prop-types';
function FAQ( {faqs} ) {
    return (
        <div className='outer-container'>
            <div className='faq'>
                <h2>FAQs</h2>
                { faqs.map((faq, index) => (
                    <>
                        <h3>Q: {faq.query}</h3>
                        <p className='dot-before'>A: {faq.answer}</p>
                    </>
                )) }
            </div>
        </div>
    );
}

FAQ.propTypes = {
    faqs: PropTypes.arrayOf(
        PropTypes.shape({
            query: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired
        })
    )
}

export default FAQ;