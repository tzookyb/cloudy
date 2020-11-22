import React, { useContext, useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import _ from 'lodash';
import { StoreContext } from '../../App';
import { weatherService } from '../../services/weatherService';
import { runInAction } from 'mobx';
import { Suggestions } from './Suggestions';
import { WindMillLoading } from 'react-loadingg';

export const Location = observer(() => {
    const store = useContext(StoreContext);
    const { locationMode } = store;
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const inputRef = useRef(null);
    const isMyLocation = locationMode === 'my-location';

    useEffect(() => {
        debouncedSearch(null);
        setSearchTerm('');
        setIsSearching(false);
        if (locationMode === 'places') {
            inputRef.current.focus()
            return;
        }
        if (isMyLocation) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const coords = { lat: position.coords.latitude, lng: position.coords.longitude };
                    weatherService.getLocation(coords).then(res => setSearchTerm(res));
                    runInAction(() => store.locationCoords = coords)
                }, async (error) => {
                    if (error.code === 1) alert('Allow Location discovery to use "My Location" feature');
                });
            } else alert('Geolocation is not supported by this browser');
        }
        // eslint-disable-next-line
    }, [locationMode])

    const handleInput = (value) => {
        console.log(value);
        setSearchTerm(value);
        setIsSearching(true);
        debouncedSearch(value);
        if (!value) setIsSearching(false);
    }

    const pickLocation = (place) => {
        setSuggestions([]);
        setSearchTerm(place);
    }

    const debouncedSearch = useRef(_.debounce((value) => {
        if (!value) return;
        weatherService.getSuggestions(value)
            .then(res => {
                setSuggestions(res);
                setIsSearching(false);
            })
    }, 1500)).current;

    return (
        <div>
            <input
                ref={inputRef}
                className="location"
                type="search"
                value={searchTerm}
                placeholder={isMyLocation ? 'Getting your location...' : 'Search for Location'}
                onChange={(ev) => handleInput(ev.target.value)}
                disabled={isMyLocation}
            />
            <div>

                {!isMyLocation && isSearching && <WindMillLoading size="large" className="loading" />}
                {!!suggestions.length && <Suggestions searchTerm={searchTerm} pickLocation={pickLocation} places={suggestions} setSearchTerm={setSearchTerm} />}


            </div>
        </div>
    )
})