import React from 'react'

export default function Forecast({ isMetric, forecast }) {
    const { forecastday } = forecast;

    return (
        <article className="forecast">
            <h2>3 Day Forecast:</h2>
            {forecastday.map(forecastDay => {
                const { day } = forecastDay
                const date = forecastDay.date.split('-').reverse().join('/')
                const temp = isMetric ? `${day.mintemp_c} - ${day.maxtemp_c}°C` : `${day.mintemp_f} - ${day.maxtemp_f}°F`;
                const wind = isMetric ? day.maxwind_kph + ' kph' : day.maxwind_mph + ' mph';

                return <div className="forecast-day" key={forecastDay.date}>
                    <div className="date">{date}</div>
                    <div className="condition">
                        {day.condition.text}
                        <div className="icon">
                            <img src={day.condition.icon} alt="condition" />
                        </div>
                    </div>
                    <div className="temp">Temperatures: {temp}</div>
                    <div className="rain">{day.daily_chance_of_rain}%</div>
                    <div className="snow">{day.daily_chance_of_snow}%</div>
                    <div className="wind">Max wind: {wind}</div>


                </div>
            })}
        </article>
    )
}