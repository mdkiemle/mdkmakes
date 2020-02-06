import React, {Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Header from '../../components/Navigation/Header/Header';
import HUD from '../../components/Navigation/HUD/HUDToggle';
import MainHUD from '../../components/Navigation/HUD/MainHUD/MainHUD';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {

    state = {
        showHUD: false
    }
    handleToggleHud = () => {
        this.setState((prevState) => {
            return {showHUD: !prevState.showHUD}
        })
    }
    render () {
    
        return (
        <Aux>
            <HUD click={this.handleToggleHud} show={this.state.showHUD}/>
            <MainHUD show={this.state.showHUD} />
            <main className={classes.content}>
                {this.props.children}
            </main>
            <Footer />
        </Aux>
        )
    }
}

export default Layout;