import React, { Component } from 'react';
import {
  Router as ReactRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import history from 'utils/history';
import settings from 'utils/settings';
import Home from './Home';

/*
  this is a react component. React component are 'classes' that have special
  functions inside to define the way the component will behave. To use a component,
  you just use the name of the class (that needs to start with a capital letter always) and
  use it just like a normal html tag, so here, so that is why in the index.js file previously
  we did <Router />. Its just like html, but we use our own components as tags.
*/
class Router extends Component {
  /*
    The render function is one of the most important special function
    that a react component gives you access to. Basically, when you use a react component
    (example by typing <Button />) the component will get 'mounted' in the DOM (or the page), and then
    it will call that render function to know what to display visually. So each time you use a react component
    and it tried to 'render' in the web page, this function will be called for that particular component
  */
  render() {
    // the routing logic can be a bit more complex but to summarize, here we define the routes of our app, and I created 1 route for home
    return (
      <ReactRouter history={history}>
        <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Redirect from="*" to={settings.DEFAULT_ROUTE} />
          </Switch>
        </div>
      </ReactRouter>
    );
  }
}

//see, here we 'export' the Router, that allows us to 'import Router' in another file if we need to use <Router />
export default Router;

// lets jump in the Home component under /screens/Home/index.js
