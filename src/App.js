import React, {useState} from 'react'
import './App.css'
import Meditation from "./meditation";
import {affirmations} from "./affirmations";

const beginAffirmation = (affirmation, setShowAffirmation, setSelectedAffirmation) => {
    setShowAffirmation(true)
    setSelectedAffirmation(affirmation.message)
}

function App() {
    const [selectedAffirmation, setSelectedAffirmation] = useState(undefined)
    const [showAffirmation, setShowAffirmation] = useState(false)

  return (
    <div>
        {!showAffirmation ?
            <div className="center">
                <h1>Intentional Kindness</h1>
                <h2>actively practice kindness toward yourself with five minute daily affirmations</h2><br/>
                {affirmations.map(affirmation => {
                    return (
                        <div
                            key={affirmation.weekDay}
                            className="list-items"
                            style={{background: `${affirmation.color}`, textAlign: 'center'}}
                            onClick={() => beginAffirmation(affirmation, setShowAffirmation, setSelectedAffirmation)}
                        >
                        <div className="day" style={{background: `${affirmation.color}`}}>
                            {affirmation.weekDay}
                        </div>
                        &nbsp;&nbsp;
                        <div className="affirmation" style={{background: `${affirmation.color}`}}>{affirmation.message}</div>
                        </div>
                    )
                })}

                </div> :
            <div>
                <Meditation affirmation={selectedAffirmation} setShowAffirmation={setShowAffirmation} />
            </div>
        }

    </div>
  );
}

export default App;
