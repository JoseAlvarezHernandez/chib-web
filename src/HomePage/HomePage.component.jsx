import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userActions } from '../_actions'

class HomePage extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            occupation: '',
            jobDescription: '',
            price: '',
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()

        this.setState({ submitted: true })
        const { occupation, jobDescription, price } = this.state
        if (occupation && jobDescription && price) {
            this.props.completeRegister(this.props.user, {occupation, jobDescription, price})
        }
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        const { user, isUpdated } = this.props
        const { occupation, jobDescription, price, submitted } = this.state
        return (
            <div className="row">
                <h1 className="col-md-9">Bienvenido: {user?.name}!</h1>
                <p className="col-md-3 text-right">
                    <Link to="/login">Cerrar sesión</Link>
                </p>
                {!isUpdated && (user?.occupation === "" || user?.jobDescription === "" || user?.price === "") && 
                    <form name="form" onSubmit={this.handleSubmit} className="row">
                        <h3 className="text-muted col-md-12 text-center">¿Listo para completar tu registro?</h3>
                        <label className="col-md-12 text-center">Ocupación</label>
                        <div className="input-group col-md-12 justify-content-center mb-3 has-failure">
                            <input type="text" className="form-control col-md-6" id="occupation" name="occupation" value={occupation} onChange={this.handleChange} required/>
                        </div>
                        <label className="col-md-12 text-center">Descripción del trabajo</label>
                        <div className="input-group col-md-12 justify-content-center mb-3">
                            <input type="text" className="form-control col-md-6" id="jobDescription" name="jobDescription" value={jobDescription} onChange={this.handleChange}  required/>
                        </div>
                        <label className="col-md-12 text-center">Precio por Hora</label>
                        <div className="input-group col-md-12 justify-content-center mb-3">
                            <input type="number" className="form-control col-md-5" id="price" name="price" value={price} onChange={this.handleChange}  required/>
                            <div className="input-group-append">
                                <span className="input-group-text">MXN</span>
                            </div>
                        </div>
                        <div className="col-md-12 justify-content-center">
                            <button className="btn btn-primary btn-md btn-block col-md-6 offset-md-3" >Guardar</button>
                        </div>
                    </form>
                }
                {(user?.occupation !== "" && user?.jobDescription !== "" && user?.price !== "") && 
                    <div className="col-md-12">
                        <h2 className="col-md-12 text-center text-muted">Todo esta listo y configurado!</h2>
                    </div>
                }
            </div>
        )
    }
}

function mapState(state) {
    const { user, isUpdated} = state.authentication
    return { user, isUpdated}
}

const actionCreators = {
    completeRegister: userActions.completeRegister
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage)
export { connectedHomePage as HomePage }