import React from 'react';

export default function About(){
    return(
        <section id='about' className=' about-container container '>
            <h1>About me</h1>
            <div className='row' style={{minHeight:'100vh'}}>
                <div className='col-lg-4 about-colored-div'>
                    <h4>Education:</h4>
                    <p> I have a master's degree in computer science, Specialized in Networks and Distributed Systems,
                         from the University of Constantine 2 Algeria.</p>
                </div>
                <div className='about-light-div col-lg-8'>
                    <h4>Who Am I:</h4>
                    <p>I am a Fullstack Web Developer, I specialize in JavaScript, and have experience working with
                        PHP, python, and JAVA. 
                        <br/> I spend my time solving challenging problems.  </p>
                    <h4>Skills:</h4>
                    <ul >
                    
                        <li>html</li>
                        <li>css</li>
                        <li>javascript</li>
                        <li>nodejs</li>
                        <li>react</li>
                        <li>express</li>
                        <li>mongodb</li>
                        <li>sass</li>
                        <li>tailwind</li>
                        <li>bootstrap</li>
                    </ul>

                </div>
            </div>
        </section>
    )
}