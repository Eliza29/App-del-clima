import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Forecast from './componentes/Forecast';


const Index = () =>{
  return (
    <>
     <BrowserRouter>
        <Switch>
          <Route path="/forecast">
            <Forecast />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
     </BrowserRouter>
      
    </>
  )
}
ReactDOM.render(<Index/>,document.getElementById('root'));