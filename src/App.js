import React from 'react'
import './default.scss'
import { Switch, Route } from 'react-router-dom'
import NavB from './components/Navbar'
import Homepage from './pages/Homepage'
import Departamentos from './pages/Departamentos'
import DeptoInfo from './pages/DeptoInfo'
import Faq from './pages/Faq'
import Blog from './pages/Blog'
import Whatsapp from './components/Whatsapp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavB/>
      <Switch>
        <Route path="/departamentos" component={Departamentos}/>
        <Route exact path="/departamentos/:id" render={(props) => <DeptoInfo {...props} />} />
        <Route path="/faq" component={Faq}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/" component={Homepage}/>
      </Switch>
      <Whatsapp/>
      <Footer/>
    </div>
  );
}

export default App;
