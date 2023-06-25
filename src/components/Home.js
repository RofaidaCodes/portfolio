import React from 'react';

export default function Home(){
    return(
        <section id='home' className='container home-container'>
            <div className='home-text'>
                <i className="fa fa-solid fa-chevron-left opening"></i>
                <div className='slash'></div>
                <h1>Hello, I am ROFAIDA <br/>a fullstack developer</h1>
                <i className="fa fa-solid fa-chevron-right closing"></i>
            </div>
        </section>
    )
}