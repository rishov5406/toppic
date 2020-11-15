import React from 'react';
import {Link } from 'react-router-dom';

const navbar = () => (
    
  <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <header className="masthead mb-auto">
           <div className="inner">
              <h3 className="masthead-brand">Toppick</h3>
                 <nav className="nav nav-masthead justify-content-center">
                    <Link className="nav-link active" to="/">Home</Link>
                    <Link className="nav-link" to="/blog">Blogs</Link>
                    <Link className="nav-link" to="/about">Write with us</Link>
                   </nav>
           </div>
      </header>
   </div>
    


);

export default navbar;