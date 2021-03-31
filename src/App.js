
import { Fragment } from 'react';
import './App.css';
import Dashboard from './components/dashboard.js';
import Navigation from './components/Navigation.component.js';
import NewPost from './components/NewPost.component.js';
import Home from './components/home.component.js';
import store from './store.js';
import {Provider} from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import styles from './styles.module.css';
import Banner from './components/Banner.component';
import Portfolio from './components/Portfolio.component.js';
import Footer from './components/Footer.component.js'

function App() {
  return (
    <Fragment >
      <Provider store={store}>
        <Router >
            <Navigation />
            <div id={styles.top}>
                <Banner/>
            </div>

            <div id={styles.sideBar} >
                  <Footer/>
            </div>
            
            <div id={styles.main} >
                <switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/new" exact component={NewPost}/>
                  <Route path="/blog" exact component={Dashboard}/>
                  <Route path="/portfolio" exact component={Portfolio}/>
                </switch>
            </div>
            
        </Router>
      </Provider>
    </Fragment>
  );
}

export default App;
