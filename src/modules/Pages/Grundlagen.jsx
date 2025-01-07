import { useRef, createRef } from 'react';
import '../PageTemplate/PageWrapper.css';
import TooltipItem from '/Users/mervan/Desktop/genial/src/modules/Tippy/TooltipItem.jsx'; // Import TooltipItem

function Grundlagen() {
    const moduleData = [
        {
            id: 1,
            title: 'Zahlenmengen',
            headline: 'Zahlenmengen',
            description: 'Lerne die Basics von Basics von Zahlenmengen.'
        },
        {
            id: 2,
            title: 'Zahlenmengen',
            headline: 'Zahlenmengen',
            description: 'Lerne die Basics von Basics von Zahlenmengen.'
        },
        {
            id: 3,
            title: 'Zahlenmengen',
            headline: 'Zahlenmengen',
            description: 'Lerne die Basics von Basics von Zahlenmengen.'
        },
        {
            id: 4,
            title: 'Zahlenmengen',
            headline: 'Zahlenmengen',
            description: 'Lerne die Basics von Basics von Zahlenmengen.'
        },
        {
            id: 5,
            title: 'Zahlenmengen',
            headline: 'Zahlenmengen',
            description: 'Lerne die Basics von Basics von Zahlenmengen.'
        }
    ];

    const itemRefs = useRef([]);
    itemRefs.current = moduleData.map(
        (module, i) => itemRefs.current[i] ?? createRef()
    );

    const handleCubeClick = (module, event, itemRef) => {
        event.stopPropagation();
        console.log('Clicked modules:', module.headline);

        if (itemRef && itemRef.current) {
            itemRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const handleAuswaehlen = (module) => {
        alert(`Ausgewählt: ${module.headline}`);
    };

    return (
        <div className="template-page">
            <div className="gleichungen-container">
                <div className="left-section">
                    <img
                        src="/images/Lektionen/Gleichungen/Gleichung.png"
                        alt="Gleichung"
                        className="subject-icon"
                    />
                    <h6>LEVEL 1</h6>
                    <h1>Grundlagen</h1>
                    <p>Vetiefe dich bei den Grundlagen von Mathematik.</p>
                    <div className="exercise-units">
                        <div className="exercise-unit">
                            <img
                                src="/images/Lektionen/Gleichungen/Uebung.png"
                                alt="Übung"
                            />
                            <h1>12 Übungen</h1>
                        </div>
                        <div className="exercise-unit">
                            <img
                                src="/images/Lektionen/Gleichungen/Lectures.png"
                                alt="Einheit"
                            />
                            <h1>2 Einheiten</h1>
                        </div>
                    </div>
                </div>

                <div className="right-section">
                    {moduleData.map((module, index) => (
                        <TooltipItem
                            key={module.id}
                            module={module}
                            onSelect={handleAuswaehlen}
                            onCubeClick={handleCubeClick}
                            itemRef={itemRefs.current[index]}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Grundlagen;
