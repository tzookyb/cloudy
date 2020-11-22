import React from 'react';

export const Suggestions = ({ places, pickLocation, isSearching, setSearchTerm }) => {

    if (!places.length && !isSearching) return (
        <div className="no-results flex column align-center">
            <h3 className="mb5">No results found...</h3>
            <button onClick={() => setSearchTerm('')}>Clear search</button>
        </div>
    )

    return (
        <ul className="suggest-list clean-list">
            {places.map((place, idx) => (
                <li key={idx} className="suggest cursor-pointer" onClick={() => pickLocation(place)}>{place.name}</li>
            ))
            }
        </ul >
    )
}
