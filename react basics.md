---
title: React basics
---

## JSX

This is what JSX looks like:

```
  return <div>Hello world!</div>
```

This is the JavaScript code it gets compiled to:

```
return React.createElement("div", null, "Hello world!")
```

JSX with nesting:

```
return <div>Hello world! <span>Hi</span></div>
```

Gets compiled to:

```
return React.createElement("div", null, "Hello world!", React.createElement("span", null, "Hi"));
```
