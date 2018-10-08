import React, { Component } from 'react';
import Button from 'components/Button'; // here we import some other react components to be able to use them in this file
import Navbar from 'components/Navbar';
// SIDENOTE: when we import a component, let say Title. That gives us access to the class Title, but no component gets mounted in the page yet.
// Its not the same as when we use that Title and use it that way <Title />, this is when the component gets added to the webpage and his special methods gets called.
// There 'special' functions are referred as 'lifecycle' methods, since they define the lifecycle of the component when it gets added to the page!

class Home extends Component {

  /*
    This is another important lifecycle method of a component. A react component is a class, and
    in javascript, any class has a constructor. A constructor is the first function called when that class
    is used to create something. So let say somewhere you use <Home />, well the first thing that will happen
    is that there is an object Home that will be created using the class, and the constructor will be called.
    So you typically want to use a constructor to create some variables or stuff that your component will need,
    in that case, we instantiate the internal state of the component. That way, in any other lifecycle methods (such as render),
    we will be able to access the internal state since the constructor created it for us!
  */
  constructor(props) {
    super(props);
  };


  //when the component gets created  and added to the page (happens in that case when we land in the right route /home of the router), this lifecycle method gets called
  render() {
    return (

      <div className="home">
        <Navbar></Navbar>
        <div className="home-content">
          <p className="desc">This is the home screen, click on the button to go to members.</p>
          <Button onClick={this.buttonPressed}>GO TO MEMBERS</Button>
      </div>
      </div>
    );
  }
}

export default Home;

// lets go check the Button component now
