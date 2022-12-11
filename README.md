# GeneratorJs

Quick and fast way of dynamically creating elements

### Installation

Just download and include the library, and you are good to go :)
```javascript
<script src="/path/to/GeneratorJs.js"></script>
```

#### Installing via bower

```bash
$ bower install generatorjs
```

## Examples

You basically have two way to create DOM elements with GeneratorJs

*1 with constructor objects
*2 with constructor strings

## 1- With constructor objects

This is the preferred way to generate DOM elements via GeneratorJs constructor.It allows you to generate
DOM elements based on the JSON structure passed through GeneratorJs constructor.  
Basically there is 4 main property that you want to use with JSON constructor object.

##### important notes before we go on:
    -in the JSON objects, be aware of following rules
    -{ .. } new element
    -[] child elements must be defined in array, so they must be array of objects

### el property

As the name implies, this defines/creates the element type.  
Like div, img, anchor tag, p, ul, li ..

```javascript
var gen = new GeneratorJs({ el:"div" });

console.log(gen.$el);

```
The above example will create a div element.Here is visual representation of the result
```html
    <!-- HTML Representation -->
    <div></div>
```

Or we can create lets say and img element:

```javascript
    var gen = new GeneratorJs({ el:"img" });

```

```html
    <!-- HTML Representation -->
    <img />
```

### attr property


This property allows you to define attributes to element to be created.  

Let's see in example:

```javascript
    var gen = new GeneratorJs(
            { 
                el:"div",
                attr:'id=myDiv,class=myClass' 
            }
        );

    console.log(gen.$el);
```
The above example will create a div element with id and class.Here is a visual representation of the result

```html
    <!-- HTML Representation -->
    <div id="myDiv" class="myClass"></div>
```

You can set custom attributes as well.

```javascript
    var gen = new GeneratorJs(
            { 
                el:"div",
                attr:'id=myDiv,class=myClass,customAttr1=custom1,customAttr2=custom2' 
            }
        );
    console.log(gen.$el);
```

```html
    <!-- HTML Representation -->
    <div id="myDiv" class="myClass" customAttr1="custom1" customAttr1="custom1"></div>
```
### child property

This property allows you to define child elements.Here is how you can set that property:

```javascript
    var gen = new GeneratorJs(
            { 
                el:"div",
                attr:'id=myDiv',
                child : [
                    {
                        el:"img",
                        attr:"src=http://example.com/test.gif"
                    }
                ] 
            }
        );
    console.log(gen.$el);
```

The above code snippet will generate something like below:

```html
    <!-- HTML Representation -->
    <div id="myDiv">
        <img src="http://example.com/test.gif" />
    </div>
```
You can define multiple child elements, in fact you can define as much child elements as you wish.Also you can define multi-level child elements, they all will be generated recursively.Here is how.

```javascript
    var gen = new GeneratorJs(
            { 
                el:"div",
                attr:'id=myDiv',
                child : [
                    {
                        el:"img",
                        attr:"src=http://example.com/test.gif"
                    },
                    {
                        el:"div",
                        attr:"class=childClass",
                        child : [
                            {
                                el:"div",
                                attr:"class=anotherChildClass",
                                child:[
                                    {
                                        el:"div",
                                        attr:"class=oneMoreChildClass1"
                                    },
                                    {
                                        el:"div",
                                        attr:"class=oneMoreChildClass2"
                                    }
                                ]
                            }
                        ]
                    }
                ] 
            }
        );
    console.log(gen.$el);
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
    var gen = new GeneratorJs(
            { 
                el:"div",
                attr:'id=myDiv',
                child : [
                    {
                        el:"img",
                        attr:"src=http://example.com/test.gif"
                    },
                    {
                        el:"div",
                        attr:"id=innerDiv",
                        inner:"This text set by inner!!"
                    }
                ] 
            }
        );
    console.log(gen.$el);
```
And here is how it should look :

```html
    <!-- HTML Representation -->
    <div id="myDiv">
        <img src="http://example.com/test.gif" />
        <div id="innerDiv">
            This text set by inner!!
        </div>
    </div>
```

But here there is one caveat you should give attention to that is when you define child elements to an element, if that elements has inner property then this inner property will be overwritten.

-more examples:
```javascript
    var generator = new GeneratorJs(
        {
            el:'div',
            attr:'id=div1,class=cls',
            child:[
                {
                    el:'div',
                    attr:'id=div2,class=c',
                    child:[
                        {
                            el:'button',
                            attr:'value=click,id=btn'
                        }
                    ]
                },
                {
                    el:'div',
                    attr:'id=div4,name=test,class=c'
                }
            ]
        },

        {
            env:'dev'
        }
    );

    //You can retrieve raw element object with following
    var elem = generator.$el
```
The above script will create something like below:

<img width="448" alt="1" src="https://user-images.githubusercontent.com/35298601/37527087-3211e9e6-2942-11e8-84c9-11b2fba44f5f.PNG">

### Adding events

You can simply add events like folowing:

```javascript
    generator.get("#btn").setText("Click Me").addEvent("click",myClickEvent).attachTo(document.body);

    function myClickEvent(){
        alert("clicked")
    }
```
Then result would be :

<img width="643" alt="2" src="https://user-images.githubusercontent.com/35298601/37527322-d2aaddfe-2942-11e8-89d0-87fb686e35db.PNG">

## 1- With constructor strings

This might be the way of generating elements when you want to quickly generate or maybe creating not too complicated elements to be added or appended to other GeneratorJs instance that you really want to get it generated eventually.
It allows you to create elements with string format like below:

```javascript
    var generator = new GeneratorJs("div"); //will create a div element , access via .$el
    var div = generator.$el;

    //use .. notation to specify child element
    //and use space to indicate siblings elements
    var el = new GeneratorJs("div..div").$el;
    //el contains
    /*
    <div>
        <div></div>
    </div>
    */

    el = new GeneratorJs("div..div(id=myDiv,class=myClass)").$el;
    //el contains
    /*
    <div>
        <div id="myDiv" class="myClass"></div>
    </div
    */

    el = new GeneratorJs("div..div..div(id=myDiv) div(class=myClass)").$fragment;
    //Document Fragment
    /*
    <div>
        <div>
            <div id="myDiv"></div>
        </div class="myClass">
    </div
    <div></div>
    */
    
    el = new GeneratorJs("div div..div..div(class=test) div(id=myId)..div..div").$fragment;
    /*Document Fragment
    <div></div>
    
    <div>
        <div>
            <div class="test">
            </div>
        </div>
    </div>
            
    <div id="myId">
        <div>
            <div></div>
        </div>
    </div>
    */
```
###### Note that this method does not include creating child sibling elements since it might make the constructor string way too complicated then it is designed for.Use instead 1- With constructor objects, since it is more clean, readible and powerfull.
