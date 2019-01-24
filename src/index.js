import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(
  <BrowserRouter> {/*solved error You should not use <Route> or withRouter() outside a <Router>*/}
  <App />
  </BrowserRouter>
  , document.getElementById('root'))
