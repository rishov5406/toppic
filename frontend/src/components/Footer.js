import React from 'react';
import {Link, NavLink } from 'react-router-dom';

const footer = () => (
    <footer className="blog-footer">
    <p>Blog template built for <Link to="https://getbootstrap.com/">Bootstrap</Link> by <Link to="https://twitter.com/mdo">@mdo</Link>.</p>
    <p>
      <Link to="#">Back to top</Link>
    </p>
  </footer>
);

export default footer;
