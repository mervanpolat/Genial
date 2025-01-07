import 'react';
import PropTypes from 'prop-types';
import './PageWrapper.css';

function PageWrapper({ title, headline, description, imageSrc, exercises, units, moduleData }) {
    return (
        <div className="gleichungen-page">
            <div className="gleichungen-container">
                {/* Left Section */}
                <div className="left-section">
                    <img src={imageSrc} alt={title} className="gleichung-icon" />
                    <h6>ALGEBRA &amp; FUNKTIONSTHEORIE</h6>
                    <h1>{headline}</h1>
                    <p>{description}</p>
                    <div className="exercise-units">
                        <div className="exercise-unit">
                            <img src="/images/Lektionen/Gleichungen/Uebung.png" alt="Übung" />
                            <h1>{exercises} Übungen</h1>
                        </div>
                        <div className="exercise-unit">
                            <img src="/images/Lektionen/Gleichungen/Lectures.png" alt="Einheit" />
                            <h1>{units} Einheiten</h1>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="right-section">
                    {moduleData.map((module, index) => (
                        <div key={module.id} className="right-item">
                            <p>{module.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// PropTypes definition
PageWrapper.propTypes = {
    title: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired,
    units: PropTypes.number.isRequired,
    moduleData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired
};

export default PageWrapper;
