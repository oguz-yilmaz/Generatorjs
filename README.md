# Generatorjs

Quick and fast way of dynamically creating elements

### Installing

Just download and include the library, and you are good to go :)
```javascript
<script src="/path/to/Generatorjs.js"></script>
```
If you have jQuery loaded in your page, then Generatorjs will make use of it.

## Examples

You basically have two way to create DOM elements with Generatorjs

*1 with constructor objects
*2 with constructor strings

## 1- With constructor objects

This is the preferred way to generate DOM elements via Generatorjs connstructor

```javascript
    var generator = new Generatorjs(
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

This might be the way of generating elements when you want to quickly generate.It allows you to create elements with string format

```javascript
    var generator = new Generatorjs("div"); //will create a div element , access via .$el
    var div = generator.$el;

    //use .. notation to specify child element
    //and use space to indicate siblings elements
    var el = new Generatorjs("div..div").$el;
    //el contains
    <div>
        <div></div>
    </div

    var el = new Generatorjs("div..div div").$el;
    //el contains
    <div>
        <div></div>
    </div
    <div></div>

    var el = new Generatorjs("div..div..div(id=myDiv) div(class=myClass)").$el;
    //el contains
    <div>
        <div>
            <div id="myDiv"></div>
        </div class="myClass">
    </div
    <div></div>
```
###### Note that this method does not include creating child sibling elements since it might make the constructor string way too complicated then it is designed for.Use instead 1- With constructor objects, since it is more clean, readible and powerfull.
