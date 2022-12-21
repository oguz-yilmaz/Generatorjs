# GeneratorJs
****
One Paragraph of project description goes here
Creating nested DOM elements dynamically is always a hustle, especially if you
don't use one of those js frameworks like React, Vue, Andgular, etc. Even they
don't give you fully independent DOM elements but rather a wrapper around it.
GeneratorJs allows you to create elements dynamically in a **declarative way**
with performance kept in mind. This way you can programatically create nested
DOM elements, add event listeners and manipulate and attach back to DOM tree if
you will.

GeneratorJs supports all major module systems giving you the full flexibility.

### Features

- Create nested DOM elements efficiently
- Define what elements will be created by a definitions object
- Supports virtual DOM
- Select and modify elements in the virtual DOM
- Add or remove event listeners to elements
- Attach elements to any places in actual DOM

##### Table of Contents
- [Installation](#installation)  
- [Usage](#usage)
    - [Constructing elements](#constructing-elements)

#### Installing via npm

```bash
$ npm install generatorjs
```

#### Using as script  

You can download the scripts under `dist` folder.

```javascript
<script src="/path/to/GeneratorJs.js"></script>
```

### Usage

We use GeneratorJs contractor to define our virtual DOM tree. That constructor gets  
`definitions` object that defines the tree starting from the root element.

### Constructing elements

#### 1. *el*
A *required* property of definitions object that represents an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

```javascript
var gen = new GeneratorJs({ el: 'div' })

console.log(gen.$el) // will return the root element
```

The above snippet will create an empty div element.

```html
<div></div>
```

Or we can create lets say and img element:

```javascript
var gen = new GeneratorJs({ el: 'img' })
```

```html
<img />
```

#### 2. *attr*

An object key-value mapping that represents [HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes?retiredLocale=tr) and values.

```javascript
var gen = new GeneratorJs({
    el: 'div',
    attr: 'id=myDiv,class=myClass'
})

console.log(gen.$el)
```

The above example will create a div element with id and class.Here is a visual
representation of the result

```html
<!-- HTML Representation -->
<div id="myDiv" class="myClass"></div>
```

You can set custom attributes as well.

```javascript
var gen = new GeneratorJs({
    el: 'div',
    attr: 'id=myDiv,class=myClass,customAttr1=custom1,customAttr2=custom2'
})
console.log(gen.$el)
```

```html
<!-- HTML Representation -->
<div
    id="myDiv"
    class="myClass"
    customAttr1="custom1"
    customAttr1="custom1"
></div>
```

### child property

An array that property that represents the child elements of a node.

```javascript
var gen = new GeneratorJs({
    el: 'div',
    attr: 'id=myDiv',
    child: [
        {
            el: 'img',
            attr: 'src=http://example.com/test.gif'
        }
    ]
})
console.log(gen.$el)
```

The above code snippet will generate something like below:

```html
<div id="myDiv">
    <img src="http://example.com/test.gif" />
</div>
```

You can define multiple child elements, in fact you can define as much child
elements as you wish.Also you can define multi-level child elements, they all
will be generated recursively.Here is how.

```javascript
var gen = new GeneratorJs({
    el: 'div',
    attr: 'id=myDiv',
    child: [
        {
            el: 'img',
            attr: 'src=http://example.com/test.gif'
        },
        {
            el: 'div',
            attr: 'class=childClass',
            child: [
                {
                    el: 'div',
                    attr: 'class=anotherChildClass',
                    child: [
                        {
                            el: 'div',
                            attr: 'class=oneMoreChildClass1'
                        },
                        {
                            el: 'div',
                            attr: 'class=oneMoreChildClass2'
                        }
                    ]
                }
            ]
        }
    ]
})
console.log(gen.$el)
```

And here is how it looks like:

```html
<!-- HTML Representation -->
<div id="myDiv">
    <img src="http://example.com/test.gif" />
    <div class="childClass">
        <div class="anotherChildClass">
            <div class="oneMoreChildClass1"></div>
            <div class="oneMoreChildClass2"></div>
        </div>
    </div>
</div>
```

It is all up to your imaginations :)  
Finally we ll cover the inner property

### inner property

As the name implies this will enable you to set innerHTML of an element.

```javascript
var gen = new GeneratorJs({
    el: 'div',
    attr: 'id=myDiv',
    child: [
        {
            el: 'img',
            attr: 'src=http://example.com/test.gif'
        },
        {
            el: 'div',
            attr: 'id=innerDiv',
            inner: 'This text set by inner!!'
        }
    ]
})
console.log(gen.$el)
```

### Adding events

You can simply add events like folowing:

```javascript
generator.get('#btn').addEvent('click', myClickEvent).attachTo(document.body)

function myClickEvent() {
    alert('clicked')
}
```
