import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

// importing context provider
import { ContextProvider } from './context/ContextProvider';

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>
    ,
    document.getElementById('root'));