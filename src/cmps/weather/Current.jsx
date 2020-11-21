import React from 'react'

export default function Current({ current, location, isMetric }) {

    const localTime = location.localtime.split(' ').splice(1, 1)[0];
    let lastUpdated = (current.last_updated);
    lastUpdated = lastUpdated.split(' ');
    lastUpdated = lastUpdated[1] + ' ' + lastUpdated[0].split('-').reverse().join('/');
    const temp = isMetric ? current.temp_c : current.temp_f;
    const feelsLike = isMetric ? current.feelslike_c : current.feelslike_f;
    const precip = isMetric ? `${current.precip_mm}mm` : `${current.precip_in}in.`;
    const wind = `${current.wind_dir} ${isMetric ? current.wind_kph : current.wind_mph} ${isMetric ? 'kph' : 'mph'}`

    return (
        <article className="current">
            <h3>Current Weather:</h3>
            <div className="local-time">Local time: {localTime}</div>
            <small className="last-update">Forecast last updated at: {lastUpdated}</small>
            <div className="condition">
                {current.condition.text}
                <img src={current.condition.icon} alt="condition" />
            </div>
            <div className="temp">Temperature: {temp}°{isMetric ? 'C' : 'F'}</div>
            <div className="feels">Feels Like: {feelsLike}°{isMetric ? 'C' : 'F'}</div>
            <div className="extra-info">
                <div className="precip">Precipitation: {precip}</div>
                <div className="humidity">Humidity: {current.humidity}%</div>
                <div className="wind">Wind: {wind}</div>
            </div>
        </article>
    )
}
