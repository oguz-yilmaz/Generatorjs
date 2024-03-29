## GeneratorJs

---

Creating nested DOM elements dynamically is always a hustle, especially if you
don't use one of those js frameworks like React, Vue, Angular, etc. Even they
don't give you fully independent DOM elements but rather a wrapper around it. In
fact they use libraries very similar to GeneratorJs under the hood to handle DOM
manipulations, element and virtual DOM creations, handling events etc.

GeneratorJs is a well-tested library that allows you to create elements
dynamically in a **declarative way** with performance kept in mind. This way you
can programmatically create nested DOM elements, add event listeners and
manipulate and attach back them to DOM tree if you will.

GeneratorJs supports all major module systems giving you full flexibility.

```javascript
const gen = GeneratorJs({
    el: 'div',
    attrs: {
        class: 'container md-5'
    },
    child: [
        {
            el: 'span',
            attrs: {
                class: 'test-class'
            },
            inner: 'Text value of this span'
        },
        {
            el: 'span',
            child: 'A span element with this text'
        },
        {
            el: 'div',
            inner: 'Div with single child element',
            child: {
                el: 'button',
                child: 'Click me',
                'custom-attribute': 'Custom value',
                events: {
                    click: (event) => alert('Clicked'),
                    mouseover: (event) => alert('Hovered')
                }
            }
        }
    ]
})

gen.attachTo(document.body)
```

### Features

- Create nested DOM elements efficiently
- Define what elements will be created by a definitions object
- Efficient DOM manipulations
- Select and modify elements in the virtual DOM
- Add or remove event listeners to elements
- Attach elements to any places in actual DOM

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#constructing-elements">Constructing elements</a></li>
        <li><a href="#selecting-selements">Selecting elements</a></li>
        <li><a href="#removing-selements">Removing elements</a></li>
        <li><a href="#replacing-selements">Replacing elements</a></li>
        <li><a href="#attaching-to-dom">Attaching to DOM</a></li>
        <li><a href="#events">Events</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li></ol>
</details>

#### Installing via npm

```bash
$ npm install @o.yilmaz/generatorjs
```

#### Importing

You can download the scripts under `dist` folder.

```javascript
<script src="/path/to/GeneratorJs.js"></script>

// or use CDN

<script src="https://cdn.jsdelivr.net/npm/@o.yilmaz/generatorjs@1.0.8/dist/Generator.min.js"></script>
```

or

```javascript
import GeneratorJs from '@o.yilmaz/generatorjs'

// or

const { default: GeneratorJs } = require('@o.yilmaz/generatorjs')
```

## Usage

We use GeneratorJs contractor to define our virtual DOM tree. That constructor
gets  
`definitions` object that defines the tree starting from the root element.

### Constructing elements

#### 1. el

A _required_ property of definitions object that represents an
[HTML Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). You
can get the root element via `generator.$el` property.

```javascript
const gen = GeneratorJs({ el: 'div' })

console.log(gen.$el) // will return the root element
```

The above snippet will create an empty div element.

```html

<div></div>
```

We can create any HTML element:

```javascript
const gen = GeneratorJs({ el: 'img' })
```

```html
<img/>
```

Sometimes we want to set some text node in elements. For that we can use either
`inner` or `child` property.

```javascript
const gen = GeneratorJs({
    el: 'div',
    attrs: {
        id: 'test-id',
        name: 'test-name'
    },
    // inner: 'Inner text of the div element'
    child: 'Inner text of the div element'
})

console.log(gen.$el)
```

```html

<div id="test-id" name="test-name">Inner text of the div element</div>
```

#### 2. attr

An object key-value mapping that represents
[HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes?retiredLocale=tr)
or custom attributes and values.

```javascript
const gen = GeneratorJs({
    el: 'div',
    attrs: {
        id: 'test-id',
        name: 'test-name',
        checked: '', // for boolean values just set empty string
        'custom-attribute': 'custom attribute value'
    },
    inner: 'Inner text of the div element'
})

console.log(gen.$el)
```

```html

<div id="test-id" name="test-name" custom-attribute="custom attribute value">
    Inner text of the div element
</div>
```

As any others, attrs property also can be applied to child elements definitions
as well.

```javascript
const gen = GeneratorJs({
    el: 'div',
    attrs: {
        id: 'test-id',
        name: 'test-name',
        'custom-attribute': 'custom attribute value'
    },
    child: {
        el: 'span',
        attrs: {
            class: 'child-class',
            'data-name': 'John Doe'
        }
    }
})

console.log(gen.$el)
```

```html

<div id="test-id" name="test-name" custom-attribute="custom attribute value">
    <span class="child-class" data-counter="John Doe"></span>
</div>
```

#### 3. child

Child property of definitions object will determine what elements tree goes
under a root element.

- It can be defined as array or string or an object.
- If string, then it will act as the inner text of the given element. If
  array, each definitions inside the array will be represent a child element
  that will be appended to that root.
- If object, it will act as definitions object which will represent a single
  element to be appended to that root.

```javascript
const gen = GeneratorJs({
    el: 'div',
    attrs: {
        class: 'container md-5'
    },
    child: [
        {
            el: 'img',
            attrs: {
                src: 'http://example.com/test.gif'
            }
        },
        {
            el: 'span',
            child: 'A span element with this text'
        },
        {
            el: 'div',
            inner: 'Div with single child element',
            child: {
                el: 'button',
                inner: 'Click me'
            }
        }
    ]
})

console.log(gen.$el)
```

```html

<div class="container md-5">
    <span class="test-class"></span>
    <span>A span element with this text</span>
    <div>
        Div with single child element
        <button>Click me</button>
    </div>
</div>
```

#### 4. inner

As the name implies this will enable you to set innerHTML of an element.  
It can have string, an actual DOM element or even another GeneratorJs object.

```javascript
const gen1 = GeneratorJs({
    el: 'div',
    attrs: {
        id: 'test-id'
    },
    inner: 'Test div'
})

const gen2 = GeneratorJs({
    el: 'div',
    inner: gen1,
    child: {
        el: 'div',
        inner: document.createElement('span')
    }
})

console.log(gen2.$el)
```

### Selecting elements

After contracting the tree via definitions object, you can select your
elements  
and modify them before attaching to actually DOM. Once you select an element,
whatever operation you chain afterwards will only be applied to that selected
node. You can chain as many `select` method as you like and all of them will
search the entire tree each time.

#### 1. Selecting single node

You can select a single node via `gen.select(selectorString)` method.
`gen.getSelected()` method will return a Node or `null`.

```javascript
generator
    .select('#btn')
    .addEvent('click', (event) => alert('clicked'))
    .select('#another-button')
    .replace(
        GeneratorJs({
            el: 'div',
            child: 'Replaced div'
        })
    )
    .attachTo(document.body)
```

#### 2. Selecting multiple nodes

You can select a single node via `gen.selectAll(selectorString)` method.
`gen.getSelected()` method will return a NodeList or `null`.

```javascript
const allDivs = generator.select('div')
    .getSelected()
```

#### 3. Getting selected node(s)

You can get use `gen.getSelected()` method or `gen.$selected` property in order
to access the actual selected Dom elements.

Note: Do not directly modify `$selected` property as it may cause unintended
results.

```javascript
const selected = generator.select('#btn')
    .getSelected()
```

#### 4. Resetting selection

You can use `gen.reset()` method to set `$selected` property to `null`.

### Removing elements

If you want to **remove** a node or node list from the GeneratorJs DOM tree, you
can use `gen.remove()` method. You should select a node or node list before
removing.

Removing a single node:

```javascript
generator.select('#btn')
    .remove()
```

Removing node list:

```javascript
generator.select('.btn')
    .remove()
```

### Replacing elements

If you want to **replace** a node or node list from the GeneratorJs DOM tree,
you can use `gen.replace(node)` method. You should select a node or node list
before removing.

> If you select multiple elements (e.g class selector or tag selector), then all
> of them will be replaced with the given argument that can be anything from
> below list.

Argument `node` of replace method can be almost anything. It can be

- Node
- NodeList
- another GeneratorJs object
- string
- Array of Nodes or strings

```javascript
const gen = GeneratorJs({
    el: 'div',
    child: [
        {
            el: 'span',
            child: 'Initial span'
        },
        {
            el: 'span',
            child: 'Initial span'
        }
    ]
})

console.log(gen.$el)
```

```html

<div>
    <span>Initial span</span>
    <span>Initial span</span>
</div>
```

Now we want to replace all the span elements with a div element. We can do this
by following:

```javascript
const replacingDiv = GeneratorJs({
    el: 'div',
    child: 'Test div'
})

gen.select('span')
    .replace(replacingDiv)
```

```html

<div>
    <div>Test div</div>
    <div>Test div</div>
</div>
```

### Attaching to DOM

You can attach your GeneratorJs DOM tree to actual DOM via
`gen.attachTo(element)` method. Note that, if you select an element before using
the `attachTo` method, that element will be attached to the given element rather
than the whole tree. If this is what you desire, then if you used `select`
method before, then you should use `reset` method before attaching.

```javascript
generator.attachTo(document.getElementById('#root'))
```

### Events

You should select the element first in order to add an event listener to that
element.

```javascript
generator
    .select('#btn')
    .addEvent('click', (event) => alert('clicked'))
    .attachTo(document.body)
```

You can chain `select` and other methods as much as you like.

```javascript
generator
    .select('#first-button')
    .addEvent('click', (event) => alert('First button clicked'))
    .select('#second-button')
    .addEvent('click', (event) => alert('Second button clicked'))
    .attachTo(document.body)
```

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<!-- CONTACT -->

## Contact

You can mail me on `oguz.yilmaz@yahoo.com`.
