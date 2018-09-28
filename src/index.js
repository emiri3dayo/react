/*
  This file is the app starting point. The most
  important part of that file is the line 18 "ReactDOM.render(......)"
  this takes our Router component, and puts it inside a div in the html
  (located inside the public folder, its called index.html) with the id 'root'.
  And after that, the component do the magic themselves :)

  So we end up with our Router ready to start doing its job. Lets go in the router now.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'screens/router'; // Here, we import the Router component from another file straight in this file to be able to use it (we can do this since in the file of the Router, we 'export' it, and then we can import it somewhere else)

// the styles/all.css file is a result of all the styles used everywhere in the folder structure, for components and stuff, that is compacted into 1 file when we run the app.
// To understand how we achieve to compile everything before the app starts, we can discuss it will be easier to expain.
import 'styles/all.css';

let idElement;
try {
  idElement = document && document.getElementById('root');
} catch (e) {
  console.error(`Error from inital app entry point ${e})`); //eslint-disable-line
}

ReactDOM.render(
  <Router />,
  idElement
);
