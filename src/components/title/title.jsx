import React from 'react'
import ReactDOM from 'react-dom'
import './title.css'
import logo from './logo.jpg'

function func(){
    
    return(<div className="home-div" style={{height:610}}>
    <div  className="title"><image src="logo" className="logo"></image>Timber</div>
    <div className="tagline"  >Preciously Carved</div>
    </div>);
}

export default func;
