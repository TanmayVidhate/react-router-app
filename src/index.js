import React from 'react';
import Home from './Views/Home/Home';
import About from "./Views/About/About"

import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const locationpage = window.location.pathname;

if(locationpage==='/')
{
  root.render(<Home />)
}
else if(locationpage==='/About')
{
  root.render(<About />);
}
else
{
  root.render(<h1>404 Not Found</h1>)
}

