import React from 'react'
import reactSvg from '../assets/svg/react-original.svg'
import mobx from '../assets/svg/mobx.svg'
import sassSvg from '../assets/svg/sass-original.svg'

export default function About() {
    return (
        <section className="main-container">
            <div className="about flex column">

                <h1>About</h1>
                <p>This is a weather app I created.</p>
                <p>It's main features are:</p>
                <ul>
                    <li>Finding out your location</li>
                    <li>Searching for other locations</li>
                    <li>Getting weather forecast using weatherapi.com</li>
                </ul>

                <h4>This app has been coded using these technologies:</h4>
                <div className="tech-grid">
                    <div><img alt="react" src={reactSvg} />React.js</div>
                    <div><img alt="mobx" src={mobx} />MobX</div>
                    <div><img alt="sass" src={sassSvg} />Sass</div>
                </div>

            </div>
        </section>
    )
}
