import React from 'react'
import Search from './search'

class Header extends React.Component {
    render(){
      
        return( <div className="encabezado">
            <h2 id="titulo">Ailen Farfaro Ruiz</h2>
            <Search search={this.props.search} handleChange={this.props.handleChange}/>
        </div>
        )
    }
 }

export default Header;