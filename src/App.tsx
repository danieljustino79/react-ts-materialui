import { 
  BrowserRouter,
Switch,
Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Header from './components/shared/template/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Container maxWidth="md">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
