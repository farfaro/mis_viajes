import React from 'react'

class Card extends React.Component{
    render(){
        const {urlImg,nombre,precio} = this.props.imgCard;
        return(
                <div className="cajaimagen"> 
                    <img className="fotografia" src={urlImg}/>
                    <p className="texto">Nombre: {nombre} </p>
                    <p className="texto">Precio: u$s {precio} </p>
                </div>
        )
    }
}

export default Card;

