import './StepByStepGuide.css';
import PropTypes from 'prop-types';

function StepByStepGuide( { title, subtitle, steps, imgs} ) {
    return (
        <div className="step-by-step-guide">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <div className='steps-desc'>
                {steps.map((step, index) => (
                    <>                 
                        <h4>STEP {index + 1}:</h4>
                        <p>{step.title}</p>
                        { step.description != null && <p>- {step.description.replace(/\\n/g, '\n')}</p> }
                    </>
                ))}
            </div>

            {imgs.map((block, index) => (
                <div className="steps">
                {block.map((img, idx) => (
                    <>
                        {
                            img.img != null &&
                            <div className="step">
                                <img src={img.img} alt="Step x" />
                            </div>
                        }
                        {((index === 0 && imgs.length > 1) || (idx < block.length - 1 && block[idx + 1].img != null)) && <div className="arrow">→</div>}
                    </>
                ))}
            </div>
            ))}
        </div>
    );
}

StepByStepGuide.propTypes = {
    steps: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
    imgs: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                img: PropTypes.string
            })
        )
    )
};

export default StepByStepGuide;
