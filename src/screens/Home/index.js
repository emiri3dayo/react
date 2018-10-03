import React, { Component } from 'react';
import Button from 'components/Button'; // here we import some other react components to be able to use them in this file
import Title from 'components/Title';
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
    this.state = { //this is the way in a react component to define the internal/local state
      timesPressed: 0 // I just set the timesPressed value to 0 initially.
    };
  }
  buttonPressed = () => {
    console.log('button was pressed!');
    const times = this.state.timesPressed;
    this.setState({
      timesPressed: times + 1
    })
  }
  //when the component gets created  and added to the page (happens in that case when we land in the right route /home of the router), this lifecycle method gets called
  render() {
    return (
      <div className="home">
        <Title center>The home screen</Title> {/* see, here we just use the Title component we imported. You may notice we pass 'center' and we also pass 'The home screen' between the tags, I'll explain in the Title component file */}
        <div className="home-content">
          <Button onClick={this.buttonPressed}>Click me</Button>   
          <p>pressed {this.state.timesPressed} times</p> {/* we can still use normal html tags, it is html afterall right?... Well it is called JSX, but it is basically identical to html with some differences sometimes in capital letters and when we need to use javascript */}
        </div>
      </div>
    );
  }
}

export default Home;

// lets go check the Button component now
