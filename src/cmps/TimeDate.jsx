import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'

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
        <section className="main-container">
            <div className="time flex space-between">
                <div className="flex column space-between">
                    <h3>{greet}</h3>
                </div>
                <div className="flex column flex-end gap10">
                    <h4>Today is {date}</h4>
                    <div className="clock flex space-between">
                        <h4>The time now is: </h4>
                        <h4>{time}</h4>
                    </div>
                </div>
            </div>
        </section >
    )
}