import React, {useState, useEffect} from 'react'

const timeFormatter = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time - minutes * 60

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

const Meditation = ({affirmation, setShowAffirmation}) => {
    const [counter, setCounter] = useState(300);
    const [startCounter, setStartCounter] = useState(false);

    useEffect(() => {
        if (counter === 0) {
            setShowAffirmation(false)
        }
        if (startCounter) {
            counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        }
    }, [counter, startCounter]);

    return (
        <div id="affirmation-wrapper" className="affirmation-wrapper">
            <div id="affirmation-message" className="selected-affirmation">{affirmation}</div>
            <div id="timer" className="timer">{timeFormatter(counter)}</div>
            <button id="begin-meditation-timer" onClick={() => setStartCounter(true)}>Begin</button>
        </div>
    )
}

export default Meditation