import React from 'react';
import elecstor from '../projectsPictures/elecstor.jpg';
import pomodory from '../projectsPictures/pomodory.png';

export default function Projects(){
    return(
        <section id='project' className='container projects-container'>
            <h1>My Projects<span>.</span></h1>
            <div className='row'>
                    <div className=' project-card col-md-5'>
                        <img src={elecstor} className="project-img" alt="..."/>
                
                        <div className='project-desc'>
                            <h4 className="">Elecstor</h4>
                            <p className="">Online store for Electronic devices with E-payement and CMS</p>
                            <h6>Technologies build with:</h6>
                            <ul >
                                <li>MongoDB</li>
                                <li>Express</li>
                                <li>React</li>
                                <li>NodeJS</li>
                                <li>Stripe API</li>
                                <li>Passport Authentication</li>
                                <li>Cloudinary API</li>
                                <li>Mixpanel API</li>
                            </ul>
                            <a href="https://elecstor.netlify.app/" class="">View Project   
                                <i className="fa fa-solid fa-arrow-right" style={{marginLeft:'9px'}}></i>
                            </a>
                        </div>
                    </div> 
                    <div className=' project-card col-md-5'>
                        <img src={pomodory} className="project-img" alt="..."/>
                
                        <div className='project-desc'>
                            <h4 className="">Pomodory</h4>
                            <p className=""> Online POMODORO App for Study and Work</p>
                            <h6>Technologies build with:</h6>
                            <ul >
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>Tailwind</li>
                            </ul>
                            <a href="https://pomodory.netlify.app/" class="">View Project   
                                <i className="fa fa-solid fa-arrow-right" style={{marginLeft:'9px'}}></i>
                            </a>
                        </div>
                    </div> 
            </div>
        </section>
    )
}