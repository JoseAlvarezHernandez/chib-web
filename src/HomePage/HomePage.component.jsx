import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    
    render() {
        const { user, loggedIn } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Bienvenido {user?.name}!</h1>
                <p>
                    <Link to="/login">Debes iniciar tu sesión</Link>
                </p>
            </div>
        );
    }
}

function mapState(state) {
    const { authentication } = state;
    const { user, loggedIn } = authentication;
    return { user, loggedIn };
}


const connectedHomePage = connect(mapState, undefined)(HomePage);
export { connectedHomePage as HomePage };