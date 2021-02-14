import { Router, Route, Switch } from 'react-router-dom';
import Menu from './headerMenu/Menu';
import About from './headerMenu/About';
import Contacts from './headerMenu/Contacts';
import MainPage from './FrontPage/MainPage';
import createHistory from './FrontPage/history';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router history={createHistory}>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/about" exact component={About} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/contacts" exact component={Contacts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
