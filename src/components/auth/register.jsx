import React, {Component} from 'react'
import img from './../../login.jpg'

export class RegisterComponent extends Component{

    render(){
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Inicia Sesión</div>
                <div className="content">
                    <img  alt="register" src={img}></img>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email">Correo electronico</label>
                        <input type="email" name="email" placeholder="Correo electronico"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" placeholder="Contraseña"></input>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">Registrar</button>
                </div>
            </div>
        )
    }
}