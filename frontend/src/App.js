import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <main>
          <Route exact path='/' component={LandingPage} />
          <Route path='/mynotes' component={MyNotes} />
        </main>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
