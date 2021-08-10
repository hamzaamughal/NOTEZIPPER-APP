import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <main>
          <Route exact path='/' component={LandingPage} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/mynotes' component={MyNotes} />
        </main>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
