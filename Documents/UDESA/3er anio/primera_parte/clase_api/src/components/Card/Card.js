import React, {Component} from "react";


class Card extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <article>
                <img src={this.props.dataPersonaje.image} alt=''> </img>
                <h3> {this.props.dataPersonaje.name} </h3>
                <p></p>
                <p>borrar</p>
                <p>Estado: {this.props.dataPersonaje.status} </p>
                <p onClick = { () => this.props.borrarPersonaje(this.props.dataPersonaje.id)}> borrar</p>
            </article>

        )
    }

}

export default Card;