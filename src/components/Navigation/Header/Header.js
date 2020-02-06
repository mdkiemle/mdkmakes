import React, {Component} from 'react';
import classes from './Header.module.css';
import HUD from '../HUD/HUDToggle';

class Header extends Component {

    state = {
        showHUD: false
    }
    
    handleHudToggle = () => {
        this.setState((prevState) =>{ 
            return {showHUD: !prevState.showHUD}
        });
    }
    render() {
       
        return (
            <header className={classes.header}>
                <HUD click={this.handleHudToggle} show={this.state.showHUD}/>
            </header>
        )
    }
}

export default Header;