---
title: React basics
---

React requirements and basic concepts.

1. TOC 
{:toc}

## JSX

### Generate HTML from JS

JSX is a way of writing JavaScript and HTML together. JSX is a shortcut for using `React.createElement()`. JSX has to be compiled. This is what JSX looks like before and after:

```js
const h1 = <h1>Hello World</h1>;
```

```js
return React.createElement("div", null, "Hello world!");
```

Another example, with nesting:

```jsx
return (
	<div> Hello world! <span>Hi</span> </div>
);
```

```js
return React.createElement( "div", null, "Hello world!",
	React.createElement("span", null, "Hi")
);
```

### Multi-line JSX 

Multi-line JSX expressions are wrapped with parens:

```jsx
return (
	<a href="https://www.example.com">
		<h1>Click me!</h1>
	</a>
);
```

### JSX Elements

A JSX element must have exactly one outermost element. React has "[Fragments](https://reactjs.org/docs/fragments.html)", which group elements without creating a DOM node to hold them. (Why is this necessary?)

```jsx
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

```jsx
class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}
```

### If statements in React

[JSX In Depth – React](https://reactjs.org/docs/jsx-in-depth.html): 

> if statements and for loops are not expressions in JavaScript, so they can’t be used in JSX directly. Instead, you can put these in the surrounding code.

```jsx
function NumberDescriber(props) {
  let description;
  if (props.number % 2 == 0) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }
  return <div>{props.number} is an {description} number</div>;
}
```

Another option is to use the conditional operator (the _ternary_ operator, known as such because it's the only JS operator that takes three arguments). Following is an [example of the conditional operator from Codecademy](https://www.codecademy.com/courses/react-101/lessons/react-jsx-advanced/exercises/jsx-conditionals-ternary).

```jsx
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);
```

Yet another option is to use the `&&` operator. Similar to the conditional operator, if the first argument is true, is returns the second argument. But there is no third argument, so if the first argument is false, it does nothing. Following is an [example of the && operator from Codecademy](https://www.codecademy.com/courses/react-101/lessons/react-jsx-advanced/exercises/jsx-conditionals-and-operator).  

```jsx
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);
```

Here's an overview of these options, again [from Codecademy](https://discuss.codecademy.com/t/when-should-i-use-an-if-statement-a-ternary-operator-or-the-operator/404789).

> - The && and ternary operators are more concise, choose either of these when possible.
> - Choose the && over a ternary when you want an action to occur (or not) based on a single condition.
> - Choose an if/else/else if statement when you need to extrapolate logic to make it easier to read and understand.


More:

- [Conditional Rendering – React](https://reactjs.org/docs/conditional-rendering.html)
- [Lists and Keys – React](https://reactjs.org/docs/lists-and-keys.html)
- [How do you use the ? : (conditional) operator in JavaScript? - Stack Overflow](https://stackoverflow.com/questions/6259982/how-do-you-use-the-conditional-operator-in-javascript)
- [How && and || Operators Really Work in JavaScript](https://dmitripavlutin.com/javascript-and-or-logical-operators/)

### JSX Syntax

- Use `className` instead of `class`
- Self closing tags are required. 
- Use curly braces to wrap JavaScript inside of a JSX element.

## Rendering

```jsx
ReactDOM.render(elementToRender,whereToRender)
```

When do you pass `<Element>` and when do you pass `element`? 

- Pass `<Element>` if you're calling a React component. 
- Pass `element` when you're just using a variable with a JSX expression. 


## Events

JSX elements can have event listeners just like HTML elements. [Events](https://reactjs.org/docs/handling-events.html) are how we add interaction to React apps. 

An _Event Listener_ is a JSX attribute. Its name should be something like `onClick` – the word `on`, and the type of the event. Its value should be a function, either called by name or an anonymous function.

To handle an event, we define an event handler function, and pass it as a prop. A handler function should be called something like  `handleClick` – the word `event`, and the type of event being handled. 

```jsx
// talker.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
		// onClick here is arbitrary, it's just the name we'll use later, but it doens't do anything special and it can be any other name	
    return <Button onClick={this.handleClick} />;   }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

// Button.js
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
			// onClick here is a special attribute that creates an event listener. It has to be called `onClick`
      <button onClick={this.props.onClick}> 
        Click me!
      </button>
    );
  }
}
```
[example from Codecademy](https://www.codecademy.com/courses/react-101/lessons/this-props/exercises/handleevent-onevent-props-event)
{: .cite}



Supported events: [Clipboard Events](https://reactjs.org/docs/events.html#clipboard-events), [Composition Events](https://reactjs.org/docs/events.html#composition-events), [Keyboard Events](https://reactjs.org/docs/events.html#keyboard-events), [Focus Events](https://reactjs.org/docs/events.html#focus-events), [Form Events](https://reactjs.org/docs/events.html#form-events), [Generic Events](https://reactjs.org/docs/events.html#generic-events), [Mouse Events](https://reactjs.org/docs/events.html#mouse-events), [Pointer Events](https://reactjs.org/docs/events.html#pointer-events), [Selection Events](https://reactjs.org/docs/events.html#selection-events), [Touch Events](https://reactjs.org/docs/events.html#touch-events), [UI Events](https://reactjs.org/docs/events.html#ui-events), [Wheel Events](https://reactjs.org/docs/events.html#wheel-events), [Media Events](https://reactjs.org/docs/events.html#media-events), [Image Events](https://reactjs.org/docs/events.html#image-events), [Animation Events](https://reactjs.org/docs/events.html#animation-events), [Transition Events](https://reactjs.org/docs/events.html#transition-events), [Other Events](https://reactjs.org/docs/events.html#other-events)

## `props`

Components pass information around using an object called `props`. When using a component, we can pass values to its `props` object using JSX attributes. 

`this.props.children` will return a component's children. Multiple children are returned in an array. A single child is returned as-is, not inside an array. If there are no children, `undefined` is returned. 

`Component.defaultProps = {}` can set defaults for when props are not passed over. Call it after defining the class. 

## State

State is persistent private "memory" held internally by a component. State is initialized in the component's constructor method, which is called when creating a new instance of the class. 

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
[Example from React docs](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)
{: .cite}

