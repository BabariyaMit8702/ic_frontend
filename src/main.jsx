import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './index.css'
import { MyStore } from './store/the_store.jsx'
import {Provider} from 'react-redux'

createRoot(document.getElementById('root')).render(
        <Provider store={MyStore}>
            <App />
        </Provider>
    
)
