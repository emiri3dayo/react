import React from 'react';
import classnames from 'classnames';

/*
  This already looks different.. no class, nothing!?
  This tho is still a component that will be totally usable in the same way as
  the other ones (<Title />), the only difference here (since we're not using react class)
  is that this component will NOT have the lifecycle methods available to configure the way it behaves.
  Not even the render function. So this component, when you call it <Title /> will return something at the end which will be the JSX to display, nothing fancy
*/
const Title = (props) => {
  const classes = classnames('title', props.className || '', { // don't pay too much attention to that, but basically, we can install packages in a project made by other people, and this particular package helps us list all the css classes to pass to our h1
    [`title-size-${props.size}`]: props.size,
    'title-center': props.center
  });
  return <h1 className={classes}>{props.children}</h1>; // we return the jsx just like we used to in render method of a React component
};

export default Title;

// Lets now take a look at the style.scss file right next to that very file.
