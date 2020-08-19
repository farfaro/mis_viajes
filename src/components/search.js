import React from 'react'


class Search extends React.Component {
    render(){
        return (
            <input id="buscar" type="search" value={this.props.search} onChange={this.props.handleChange} placeholder="Buscar..."/> 
        )
            
        
    }
 }

export default Search;