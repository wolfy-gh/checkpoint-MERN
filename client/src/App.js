import './App.css';
import List from "./components/ListUser"
import { Button } from 'semantic-ui-react'
import { Route, Switch, Link } from 'react-router-dom'
import AddUser from './components/AddUser';
import {togglefalse} from './JS/actions/edit'
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <div className="top">
        <Link to="/add">
          <Button primary onClick={()=> dispatch(togglefalse()) } size="huge">Add User</Button>
        </Link>
        <Link to="/">
          <Button color="green" size="huge">List User</Button>
        </Link>
      </div>
      <div className="container">
        <Switch>
          <Route path="/" exact component={List} />
          <Route path={["/add", "/edit/:id"]} component={AddUser} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
