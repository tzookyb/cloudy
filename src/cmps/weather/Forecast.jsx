import React from 'react'

export default function Forecast({ isMetric, forecast }) {
    const { forecastday } = forecast;

    return (
        <React.Fragment>
            <h3 className="text-center">3 Day Forecast:</h3>
            <article className="forecast mb15">
                {forecastday.map(forecastDay => {
                    const { day } = forecastDay
                    const date = forecastDay.date.split('-').reverse().join('/')
                    const temp = isMetric ? `${day.mintemp_c} - ${day.maxtemp_c}°C` : `${day.mintemp_f} - ${day.maxtemp_f}°F`;
                    const wind = isMetric ? day.maxwind_kph + ' kph' : day.maxwind_mph + ' mph';

                    return <div className="forecast-day" key={forecastDay.date}>
                        <div className="date">{date}</div>
                        <div className="condition">{day.condition.text}</div>
                        <div className="condition-img"><img src={day.condition.icon} alt="condition" /></div>
                        <div className="temp">Temperatures: {temp}</div>
                        <div className="wind">Max wind: {wind}</div>
                        <div className="rain">Rain chance: {day.daily_chance_of_rain}%</div>
                        <div className="snow">Snow chance: {day.daily_chance_of_snow}%</div>
                    </div>
                })}
            </article>
        </React.Fragment>
    )
}