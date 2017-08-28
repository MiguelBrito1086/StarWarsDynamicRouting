import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import BaseLayout from './components/Layout';
// IMPORT REACT ROUTER <<<<<<<<<<<<<<<<<<<<<<
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// IMPORT COMPONENTS <<<<<<<<<<<<<<<<<<<<<<
import Explorer from './components/Explorer';
import People from './components/People';
import Films from './components/Films';
import Starships from './components/Starships';
import Details from './components/Details';

ReactDOM.render(

  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Explorer} />
        <Route path='/people' component={People} />
        <Route path='/film' component={Films} />
        <Route path='/starships' component={Starships} />
        <Route path='/details' component={Details} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
