import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../App';
// CMPS:
import { LocationModeSelector } from './weather/LocationModeSelector';
import { Location } from './weather/Location';
import { WeatherInfo } from './weather/WeatherInfo';

export const Weather = observer(() => {
    const store = useContext(StoreContext);
    return (
        <section className="weather flex column align-center flex-1">
            <LocationModeSelector />
            <Location />
            {store.weatherInfo && <WeatherInfo />}
        </section>
    )
})