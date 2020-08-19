import React from 'react';
import Section from './section';
import Header from './header';
import Footer from './footer';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = { //inicializamos las propiedades
            imagenes: [],
            search: '',

        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            search: e.target.value
        }) 
    }

    componentDidMount(){
        this.setState({
            imagenes: [
                {
                    urlImg:'https://images.pexels.com/photos/5131277/pexels-photo-5131277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    nombre:'Stop',
                    precio: '600'
                },
                {
                    urlImg:'https://images.pexels.com/photos/5131312/pexels-photo-5131312.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                    nombre:'Fabricas',
                    precio: '800'
                },
                {
                    urlImg:'https://images.pexels.com/photos/5131306/pexels-photo-5131306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    nombre:'Memoria',
                    precio: '550'
                },
                {
                    urlImg:'https://images.pexels.com/photos/5131309/pexels-photo-5131309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    nombre:'Luna Park',
                    precio: '1500'
                },
                {
                    urlImg:'https://images.pexels.com/photos/5131308/pexels-photo-5131308.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                    nombre:'Estatua de la Libertad',
                    precio: '150'
                },
                {
                    urlImg:'https://images.pexels.com/photos/5131307/pexels-photo-5131307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    nombre:'El gran puente',
                    precio: '930'
                },
                {
                    urlImg:'https://images.pexels.com/photos/5131305/pexels-photo-5131305.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                    nombre:'Central Park',
                    precio: '870'
                },
                {
                    urlImg:'https://images.pexels.com/photos/5131311/pexels-photo-5131311.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                    nombre:'Luces',
                    precio: '780'
                },
                {
                    urlImg:'https://images.pexels.com/photos/5131310/pexels-photo-5131310.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                    nombre:'Mujer frente al mar',
                    precio: '1230'
                }
            ]
        })
    }

    render(){
        return (
            <>
            <Header search={this.state.search} handleChange={this.handleChange}/>
            <Section imagenes={this.state.imagenes} search={this.state.search} handleChange={this.handleChange}/>
            <Footer/>    
            </>
        )
    }
}

export default App;

