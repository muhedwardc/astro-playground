---
title: What is solid?
description: Solid is all about small composable pieces that serve as building blocks for applications.
image: /images/solid.webp
---

## Learn Solid

Solid is all about small composable pieces that serve as building blocks for applications. These pieces are mostly functions which make up many shallow top-level APIs. Fortunately, you won't need to know about most of them to get started.

The two main types of building blocks you have at your disposal are Components and Reactive Primitives.

Components are functions that accept a props object and return JSX elements including native DOM elements and other components. They can be expressed as JSX Elements in PascalCase:

```
function MyComponent(props) {
  return <div>Hello {props.name}</div>;
}

<MyComponent name="Solid" />;
```

Components are lightweight in that they are not stateful themselves and have no instances. Instead, they serve as factory functions for DOM elements and reactive primitives.

Solid's fine-grained reactivity is built on three core primitives: Signals, Memos, and Effects. Together, they form an auto-tracking synchronization engine that ensures your view stays up to date. Reactive computations take the form of function-wrapped expressions that execute synchronousl

```
const [first, setFirst] = createSignal("JSON");
const [last, setLast] = createSignal("Bourne");

createEffect(() => console.log(`${first()} ${last()}`));
```

You can learn more about [Solid's Reactivity](https://www.solidjs.com/guides/reactivity) and [Solid's Rendering](https://www.solidjs.com/guides/rendering).