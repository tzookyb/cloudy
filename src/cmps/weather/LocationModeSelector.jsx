import React, { useContext } from 'react'
import { StoreContext } from '../../App'
import { action } from 'mobx';
import { observer } from 'mobx-react-lite';

export const LocationModeSelector = observer(() => {
    const store = useContext(StoreContext);

    const setMode = action((mode) => {
        store.weatherInfo = null;
        store.locationMode = mode
    });

    const buttons = [
        { mode: 'my-location', txt: 'My Location' },
        { mode: 'places', txt: 'Other Places' }
    ]

    return (
        <div className="flex gap10">
            {buttons.map((button, idx) => (
                <button
                    key={idx}
                    className={`mode-btn ${store.locationMode === button.mode ? 'location-mode-active' : ''}`}
                    onClick={() => setMode(button.mode)}>
                    { button.txt}
                </button>
            ))}
        </div >
    )
})