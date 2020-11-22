import React, { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import { useHistory } from 'react-router-dom';
import { TempToggle } from './weather/TempToggle';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();

    const routeTo = (route) => {
        if (isOpen) setIsOpen(false);
        history.push(route);
    }

    return (
        <header className={`main-container ${isOpen ? 'open' : ''}`}>
            <div className="flex align-center space-between">
                <div className="flex gap5 align-center cursor-pointer">
                    <img onClick={() => history.push('/')} src={require('../assets/img/logo.png').default} alt="logo" className="logo" />
                    <h1 onClick={() => history.push('/')}>Cloudy</h1>
                    <nav className="flex align-center">
                        <ul className="clean-list flex align-center">
                            <li onClick={() => routeTo('/about')}>About</li>
                            <li onClick={() => routeTo('/weather')}>Weather</li>
                        </ul>

                    </nav>
                </div>
                <TempToggle />
                <Hamburger
                    className="hamburger"
                    toggled={isOpen}
                    toggle={() => setIsOpen(!isOpen)}
                    rounded
                />
            </div>
            <div onClick={() => setIsOpen(false)} className={`screen ${isOpen ? 'open' : ''}`}></div>
        </header >
    )
}
