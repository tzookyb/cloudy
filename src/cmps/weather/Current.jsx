import React from 'react'

export default function Current({ current, location, isMetric }) {

    const localTime = location.localtime.split(' ').splice(1, 1)[0];
    let lastUpdated = (current.last_updated);
    lastUpdated = lastUpdated.split(' ');
    lastUpdated = lastUpdated[1];
    const temp = isMetric ? current.temp_c : current.temp_f;
    const feelsLike = isMetric ? current.feelslike_c : current.feelslike_f;
    const precip = isMetric ? `${current.precip_mm}mm` : `${current.precip_in}in.`;
    const wind = `${current.wind_dir} ${isMetric ? current.wind_kph : current.wind_mph} ${isMetric ? 'kph' : 'mph'}`

    return (
        <React.Fragment>
                <h3 className="text-center">Current Weather:</h3>
                <article className="current mb15">
                    <div className="local-time">Local time: {localTime}</div>
                    <small className="last-update">Forecast last updated at: {lastUpdated}</small>
                    <h2 className="condition">{current.condition.text}</h2>
                    <div className="condition-img"><img src={current.condition.icon} alt="condition" /></div>
                    <div className="temp">Temperature: {temp}°{isMetric ? 'C' : 'F'}</div>
                    <div className="feels">Feels Like: {feelsLike}°{isMetric ? 'C' : 'F'}</div>
                    <div className="extra-info">
                        <div className="precip">Precipitation: {precip}</div>
                        <div className="humidity">Humidity: {current.humidity}%</div>
                        <div className="wind">Wind: {wind}</div>
                    </div>
                </article>
        </React.Fragment>
    )
}
