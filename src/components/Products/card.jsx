import React from 'react'
import './card.css'
function pressed(){
    alert("Add to cart ?")
}

function card(props){
    return(
        <div className="card-div-costom" >
        <div className="card card-div-costom" style={{width: 290}}>
         <img src={props.src} className="card-img-top" alt="..."/>
         <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.discription}</p>
          <a  href="https://www.google.com" className="btn btn-primary">Add to Cart</a>
          </div>
        </div>
        </div>
    )
}


export default card;