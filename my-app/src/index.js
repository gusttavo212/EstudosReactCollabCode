import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

//Importando as variaveis de estilo
import GlobalColors from './styles/settings/colors'

//Importando o component App
import App from './App';

//JSX
ReactDOM.render(
    <Fragment>
        <GlobalColors />
        <App />
    </Fragment>, 
    document.getElementById('root')
);
