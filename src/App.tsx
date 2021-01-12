import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import PdfTronContainer from './components/PdfTronContainer';
import CounterContainer from './components/counter/CounterContainer';
import ContainerTodo from './components/counter/ContainerTodo';

export function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/pdftron'>PdfTron</Link>
            </li>
            <li>
              <Link to='/counter'>Counter</Link>
            </li>
            <li>
              <Link to='/todo'>Todo</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/' component={() => (<div>path="/"</div>)} />
          <Route exact path='/pdftron' component={PdfTronContainer} />
          <Route exact path='/counter' component={CounterContainer} />
          <Route exact path='/todo' component={ContainerTodo} />
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}
