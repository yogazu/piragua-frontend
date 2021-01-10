import React from "react";


class Formulario extends React.Component {

    constructor (props){
        super(props)

        this.state = 
            {
                nombre  :"",
                correo :""
            }
            this.cambiarNombre = this.cambiarNombre.bind(this);
            this.cambiarCorreo = this.cambiarCorreo.bind(this);

        }
        cambiarNombre(e) {
              this.setState({
                  nombre : e.target.value
              })  

        }
        cambiarCorreo(e){
            this.setState({
                correo: e.target.value
            })
        }
        //this.setState({})

    render() {
        
        return (
            <div className="ed-grid">
                <h1>FORMULARIO</h1>
                <h2>{`${this.props.name}`}</h2>
                <form id="elemento">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label >Nombre completo</label>
                            <input type="text" onChange={e => this.setState({
                                nombre: e.target.value
                            })}/>
                        </div>
                        <div className="form__item">
                            <label >Correo electrónico</label>
                            <input type="email"
                                onChange={this.cambiarCorreo}
                            />
                        </div>
                    </div>
                    <div>
                        <h2>{`Hola ${this.state.nombre}`}</h2>
                        <span>{`Tu correo es: ${this.state.correo}`}</span>
                    </div>
                </form>
            </div>
        )
    }

    componentDidMount () {
        
        let elemento = document.getElementById("elemento")
        console.log (elemento)

    }

    componentDidUpdate (prevProps, prevState) {
        console.log (prevProps)
        console.log (prevState)
        console.log ("--------")

    }

    componentWillUnmount () {

    }

}

export default Formulario