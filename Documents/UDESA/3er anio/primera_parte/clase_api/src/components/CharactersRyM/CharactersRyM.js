import React, {Component} from "react";
import Card from '../Card/Card';

class CharactersRyM extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personajes:[],
            next: '' //actualizar la url de la siguiente pagina de rsultados.

        }
    }
    componentDidMount(){
        let url = 'https://rickandmortyapi.com/api/character'
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState (
                {
                    personajes: data.results,
                    next: data.info.next,
                }
            ))
            .catch(error => console.log(error));
    }

    pedirMas(){
        let url = ''
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState ({
                personajes: this.state.personajes.concat(data.results)
            } ))
            .catch(error => console.log())
    }

    //borrar una tarjeta
    borrar(){
        let personajesFiltrados = [];
        this.state.personajes.filter( unPersonaje => unPersonaje.id !== id);
        this.setState({
            //personajes: personajesFiltrados
        })
    }

    //Definir un metodo para pedir mas tarjetas.

    render(){
        return(
            <section>
                {
                    this.state.personajes.lenghts === 0 ?
                    <p>Cargando...</p> :
                    this.state.personajes.map((personaje, idx) => <Card key={personaje.name +idx} dataPersonaje = {personaje}
                    borrarPersonaje = { (id) => this.borrar(id) } />
                    )}

            </section>
        )
    }
}

export default CharactersRyM