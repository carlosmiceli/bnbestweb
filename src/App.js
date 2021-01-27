import React from 'react'
import './default.scss'
import { Switch, Route } from 'react-router-dom'
import SimpleReactLightbox from 'simple-react-lightbox'
import NavB from './components/Navbar'
import Homepage from './pages/Homepage'
import Departamentos from './pages/Departamentos'
import DeptoInfo from './pages/DeptoInfo'
import Experiencias from './pages/Experiencias'
import ExpInfo from './pages/ExpInfo'
import Faq from './pages/Faq'
import Blog from './pages/Blog'
import PostBest from './pages/PostBest'
import Whatsapp from './components/Whatsapp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <SimpleReactLightbox>
        <NavB/>
        <Switch>
          <Route exact path="/departamentos/:id" render={(props) => <DeptoInfo {...props} />} />
          <Route path="/departamentos" component={Departamentos}/>
          <Route exact path="/experiencias/:id" render={(props) => <ExpInfo {...props} />} />
          <Route path="/experiencias" component={Experiencias}/>
          <Route path="/faq" component={Faq}/>
          <Route exact path="/blog/:id" render={(props) => <PostBest {...props} />} />
          <Route path="/blog" component={Blog}/>
          <Route path="/" component={Homepage}/>
        </Switch>
        <Whatsapp/>
        <Footer/>
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
