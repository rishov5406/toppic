import React, { Component,useState, useEffect } from 'react';
import Blog from './Blog';
import Footer from './Footer';

class Home extends Component {
    state ={

    }
    render(props){
        
        
        return (
             <div>
                  <div className="jumbotron mt-5">
                  <h1 className="display-4">Welcome to Blog Lyfe!</h1>
                  <p className="lead">We make all kinds of awesome blogs related to travel.</p>
                  <p>Click the button below to check out our awesome blog.</p>
                  <a style={{}} className="btn btn-primary btn-lg" href="/blog">Check out our Blog</a>
                 </div>
                 <Blog>
                     {this.props.children}
                 </Blog>
                 <Footer>
                     {this.props.children}
                 </Footer>
          </div>
        );

    }
    
}

export default Home;