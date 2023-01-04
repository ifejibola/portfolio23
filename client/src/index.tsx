//Dependencies 
import { render } from 'react-dom'

// 
// import './css/bootstrap.min.css'
// import './css/paper-kit.scss'

//Components
import AppRoutes from './AppRoutes'

//Config
import config from './config'
import { BrowserRouter } from 'react-router-dom'

render(
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>,
    document.querySelector('#root')
);