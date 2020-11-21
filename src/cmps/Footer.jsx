import React from 'react'
import github from '../assets/svg/github-original.svg'
import linkedin from '../assets/svg/linkedin-original.svg'
export default function Footer() {
    return (
        <footer className="flex align-center space-between">
            <div className="flex align-center gap5">
                <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0" /></a>
                <div className="powered-by">
                    Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>
                </div>
            </div>
            <div className="copyright flex flex-end gap10">
                <a href="https://github.com/tzookyb"><img className="social" src={github} title="to my github profile" alt="github" /></a>
                <a href="https://www.linkedin.com/in/idanbenjamin"><img className="social" src={linkedin} title="to my linkedin profile" alt="linkedin" /></a>
                <small>&copy; 2020<br /> Idan Benjamin</small>
            </div>
        </footer>
    )
}