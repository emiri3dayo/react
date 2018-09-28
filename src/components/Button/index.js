/*
  alright, so the way the button component was used is as follow: <Button onClick={this.buttonPressed}>Click me</Button>
  Lets try to understand why and how we could pass the onClick property to the component..?

  In react, these are called props (short for properties). Properties are the way to allow some customizability to a component
  so that you can reuse it in different places and kind of configuring it depending on what you need.
  Props can be whatever you want that would help you add some customization to the component. You could decide to pass a 'color' prop
  that would then be used in the render function to set the color of the button, etc.

  Here I use a prop called onClick, and the purpose of this prop is to notify the parent (so the place where we used that component) that it has been clicked.
  So props can be used straight for customization, but they are also the way to communicate to a level higher, in that case, communicate to the Home component (where we use the Buton)
  to notify Home that "heyy that button got clicked". If you check, you will see that when I used the Button (<Button onClick={this.buttonPressed}>Click me</Button>), I passed
  a 'function' to that prop. So here inside our component, I will have access to that function we passed, and call it whenever the button is clicked, and the function passed from the parent
  will get executed.

  But, how do we access these props?? It is simple, anywhere inside a lifecycle method of your class, you can call this.props and this represents an object will all your props inside,
  so in our case we just passed 1 prop 'onClick' so the this.props would look like

  {
    onClick: 'the function we passed'
  }
*/

import React, { Component } from 'react';

export default class Button extends Component {

  onClick(e: Object) {
    if (this.props.onClick) {
      this.props.onClick(e); //here we use it, and remember, to call a function, you need to add parenthesis at the end with the parameters to pass to that function, that is general in javascript, not react related
    }
  }

  /*
    Little note about the render function, if either the internal state of a component changes OR if the
    props passed to that component changes, the render function will be called again to 'refresh' the component in the UI.
    Example, if we had a props called 'color' for that button, and suddently in the Home component we change the color prop
    value from red to blue, and pass that as a prop to our Button, React would realize that the component has changed, the render function
    will be called again, and the button will refresh in the web page with its new UI.
  */
  render() {
    return (
      <div className="button" onClick={this.props.onClick}>
        {this.props.children} {/* wait... I said we only passed 1 prop, then what is that children one? This prop is passed 'automatically' by react when we add content inside the tags of our component. For example, a component <Potato color="blue">my name is bob</Potato>' would have a prop color set to blue, and also the prop 'children' set to "my name is bob". Note that these children can be any html (or rather jSX) so you could pass other components inside a component! */}
      </div>
    );
  }
}


// remember before we used to export the component here?...
// we exported it directly at line 26 instead, this is a thing you
// can do in javascript

// now lets go see the Title component
