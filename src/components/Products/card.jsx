import React from 'react'
import './card.css'


function card(props){
    return(
        <div className="container">
        <div className="card card-costom" >
            <div >
                 <img  src={props.src} alt="..."/>
                 <h3 style={{paddingTop:20}}>{props.title}</h3>
            </div>
            <div className="text-area">
                <h5>{props.discription}</h5>
            </div>
            <button style={{marginBottom: 20}} type="button" class="btn btn-md btn-success">Coustomize</button>
        </div>
        </div>
    )
}


export default card;


{/* <div className="card-div-costom">
        <div className="card card-div-costom" style={{width: 290}}>
         <img src={props.src} className="card-img-top" alt="..."/>
         <div className="card-body">
         <h5 className="card-title">{props.title}</h5>
         <p className="card-text">{props.discription}</p>
         <a  href="https://www.google.com" className="btn btn-primary">Add to Cart</a>
         </div>
        </div>
        </div> */}