import React, {Component} from 'react';

class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            mensaje: '',
        }
    }
    incrementar(){
        this.setState(
            {numero:this.state.numero +1}
        )
    }
    decrementar(){
        if(this.state.numero < 0) {
        this.setState({
            numero: this.state.numero -1,
            mensaje: 'ojo que estas en negativo'
        })
        } else {
        this.setState({
            numero: this.state.numero -1,
        })
    }
    reset () {
        this.setState({
            numero: 0
        })
    }
    render() {
        return(
            <div className='contador'>
                <p>En el componente contador</p>
                <p className='color'> {this.state.mensaje} </p>
                <button onClick = { () => this.decrementar()}>Decrementar</button>
                <button onClick = { () => this.incrementar()}>Incrementar</button>
                
            </div>
        )
    }

}
export default Contador;