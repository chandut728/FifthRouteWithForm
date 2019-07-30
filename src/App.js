import './App.css'
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Navigation from './Coponents/Navigation';
import Home from './Coponents/Home';
import About from './Coponents/About';
import Contact from './Coponents/Contact';
import Form from './Coponents/Form';

function App(){
  return(
    <div>
      <BrowserRouter>
        <Navigation />
          <Switch>
            <Route path = "/" component = { Home } exact/>
            <Route path = "/About" component = { About} />
            <Route path = "/Contact" component = { Contact } />
            <Route path = "/Form" component = { Form } />
          </Switch>
      </BrowserRouter>

    </div>
  )
}


export default App
