import React from 'react'
import Card from './card'
//imprime todas lasimagenes de una vez

class Section extends React.Component {
    render(){
        
    const filtroImg = this.props.imagenes.filter(
        (nombreCard)=>nombreCard.nombre.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 )

        return(
            <div className="medio">
                {
                    filtroImg.map((img,index)=> <Card imgCard={img} key={index}/> )
                }
             
            </div>
        ) 
    }
}

export default Section;
