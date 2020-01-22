import React from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Header from '../../components/Navigation/Header/Header';

const layout = (props) => (
    <Aux>
        <Header />
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;