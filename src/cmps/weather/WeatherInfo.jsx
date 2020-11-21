import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { StoreContext } from '../../App'
import Current from './Current'
import Forecast from './Forecast'

export const WeatherInfo = observer(() => {
    const store = useContext(StoreContext)
    const { weatherInfo, isMetric } = store;
    const { current, forecast, location } = weatherInfo;

    return (
        <section>
            <Current location={location} current={current} isMetric={isMetric} />
            <Forecast forecast={forecast} isMetric={isMetric} />
        </section >
    )
})