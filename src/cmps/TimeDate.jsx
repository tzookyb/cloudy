import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

export const TimeDate = () => {
    const intervalId = React.useRef(null)
    useEffect(() => {
        getDate();
        intervalId.current = setInterval(() => {
            getDate()
        }, 1000)
        return () => {
            clearInterval(intervalId.current);
        }
    }, [])

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [greet, setGreet] = useState('')

    const getDate = () => {
        const now = dayjs();
        const hour = now.hour();
        let greet;

        if (hour >= 5 && hour < 12) greet = 'Good Morning!';
        else if (hour >= 12 && hour < 18) greet = 'Good Afternoon!';
        else if (hour >= 18 && hour < 24) greet = 'Good Evening!';
        else greet = 'Good Night!';
        setGreet(greet);

        setDate(now.format('dddd D/M/YYYY'));
        setTime(now.format('HH:mm:ss'));
    }

    return (
        <React.Fragment>
            <div className="time flex column align-center space-around">
                <div className="flex column space-between">
                    <h2>{greet}</h2>
                </div>
                <h3>Today is {date}</h3>
                <h3>The time now is: </h3>
                <h3>{time}</h3>
            </div>
            <div className="cta-btn flex justify-center">
                <Link to="/weather">
                    <button>Check Weather</button>
                </Link>
            </div>
        </React.Fragment>
    )
}