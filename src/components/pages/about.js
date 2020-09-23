import React from 'react';
import profilePicture from '../../../static/assets/images/about-me/johnattan.jpg'

export default function () {
    return (
        <div className='content-page-wrapper'>
            <div
                className='left-column'
                style={{
                    background: 'url(' + profilePicture + ') no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} />

            <div className='right-column'>
                <h1>I´m Johnattan M Angeles</h1>
                <h3>
                    Welcome to my React JS Portfolio WebApp, I am firstable GRATEFUL that you took the time to come.
                    And I´m very exited to show you the things I´m passionate about, the things I love.
                    But enough words; let me show you.
                </h3>
                <h2>portfolio under construction</h2>
            </div>
        </div>
    );
}
