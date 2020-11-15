import React  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetails from './components/BlogDetails';
import About from './components/About';


const App = () => (
  <Router>
      <Layout>
           <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/blog' component={Blog} />
              <Route exact path='/blog/:id' component={BlogDetails} />
              <Route exact path='/about' component={About} />
           </Switch>
       </Layout>
  </Router>

);

export default App;
