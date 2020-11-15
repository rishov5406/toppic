import React from 'react';

const navbar = () => (
    
  <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <header className="masthead mb-auto">
           <div className="inner">
              <h3 className="masthead-brand">Toppick</h3>
                 <nav className="nav nav-masthead justify-content-center">
                    <a className="nav-link active" href="/">Home</a>
                    <a className="nav-link" href="/blog">Blogs</a>
                    <a className="nav-link" href="/about">Write with us</a>
                   </nav>
           </div>
      </header>
   </div>
    


);

export default navbar;