import React, {Component} from 'react';

export default class Navbar extends Component {

  onClick(e : Object) {
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
    return (<nav>
      <div className="navbar">
        <div className="wideDiv">
          <a href="/home">HOME</a>
          <a href="/members">MEMBERS</a>
        </div>
      </div>
    </nav>)
  }
}

// remember before we used to export the component here?...
// we exported it directly at line 26 instead, this is a thing you
// can do in javascript

// now lets go see the Title component
