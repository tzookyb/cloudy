import React, { useContext } from 'react'
import { action } from 'mobx'
import { StoreContext } from '../../App'

export const Suggestions = ({ places, pickLocation, searchTerm, setSearchTerm }) => {
    const store = useContext(StoreContext)

    const setLocation = action((place) => {
        pickLocation(place.name);
        const coords = { lat: place.lat, lng: place.lon };
        store.locationCoords = coords;
    })
    if (!places.length && searchTerm) return (
        <React.Fragment>
            <h3 className="no-results flex justify-center">No results found...</h3>
            <button onClick={() => setSearchTerm('')}>Clear search</button>
        </React.Fragment>
    )

    return (
        <ul className="suggest-list clean-list">
            {places.map((place, idx) => (
                <li key={idx} className="suggest cursor-pointer" onClick={() => setLocation(place)}>{place.name}</li>
            ))
            }
        </ul >
    )
}
