import React from 'react';

export default function Navbar(){
    return(

    <nav className="nav navbar fixed-top navbar-expand-lg navbar-dark ">
        <a className="navbar-brand" href="#home">R'</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link" href="#home">Home </a>
                <a className="nav-item nav-link" href="#about">About</a>
                <a className="nav-item nav-link" href="#project">Projects</a>
                <a className="nav-item nav-link" href="#contact" >Contact</a>
            </div>
        </div>
    </nav>
    )
}