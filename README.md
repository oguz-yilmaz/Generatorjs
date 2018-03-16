# Generatorjs

Quick and fast way of dynamically creating elements

### Installing

Just download and include the library, and you are good to go :)
```
<script src="/path/to/Generatorjs.js"></script>
```
If you have jQuery loaded in your page, then Generatorjs will make use of it.

## Examples

You basically have two way to create DOM elements with Generatorjs

*1 with constructor objects
*2 with consturctor strings

## 1- With constructor objects

This is the preferred way to generate DOM elements via Generatorjs connstructor

```
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

<img width="248" alt="1" src="https://user-images.githubusercontent.com/35298601/37527087-3211e9e6-2942-11e8-84c9-11b2fba44f5f.PNG">

### Adding events

You can simply add events like folowing:

```
    generator.get("#btn").setText("Click Me").addEvent("click",myClickEvent).attachTo(document.body);

    function myClickEvent(){
        alert("clicked")
    }
```
Then result would be :

![Generated Element](examples/images/2.png?raw=true "Console")
