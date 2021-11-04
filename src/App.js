import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Blog from './pages/Blog';
import Works from './pages/Work';

function App() {
  return (
    <div className="App">


      <Router>
        <Navbar />

        <Switch>
          <Route path="/work">
            <Works />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route> 
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

      


      <Footer />
    </div>
  );
}



export default App;
