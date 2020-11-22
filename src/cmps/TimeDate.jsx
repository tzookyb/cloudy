import React, { useEffect } from 'react'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { observer, useLocalObservable } from 'mobx-react-lite'
import { runInAction } from 'mobx'

export const TimeDate = observer(() => {
    const intervalId = React.useRef(null)
    const clock = useLocalObservable(() => ({
        now: dayjs(),
        get time() {
            return this.now.format('HH:mm:ss');
        },
        get date() {
            return this.now.format('dddd D/M/YYYY');
        },
        get hour() {
            return this.now.hour();
        },
        get greet() {
            let greet;
            if (this.hour >= 5 && this.hour < 12) greet = 'Good Morning!';
            else if (this.hour >= 12 && this.hour < 18) greet = 'Good Afternoon!';
            else if (this.hour >= 18 && this.hour < 24) greet = 'Good Evening!';
            else greet = 'Good Night!';
            return greet;
        }
    }))

    useEffect(() => {
        intervalId.current = setInterval(() => {
            runInAction(() => clock.now = dayjs());
        }, 1000)
        return () => {
            clearInterval(intervalId.current);
        }
        // eslint-disable-next-line 
    }, [])

    return (
        <React.Fragment>
            <div className="time flex column align-center space-around">
                <div className="flex column space-between">
                    <h2>{clock.greet}</h2>
                </div>
                <h3>Today is {clock.date}</h3>
                <h3>The time now is: </h3>
                <h3>{clock.time}</h3>
            </div>
            <div className="cta-btn flex justify-center">
                <Link to="/weather">
                    <button>Check Weather</button>
                </Link>
            </div>
        </React.Fragment>
    )
})