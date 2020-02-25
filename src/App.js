import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import {initStore} from './store/configureStore';

import './App.scss';


export default () => {
    return (
        <Provider store={initStore()}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Provider>
    );
};
