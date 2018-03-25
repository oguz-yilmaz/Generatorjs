QUnit.module( "Dom Generator Tests", {
    beforeEach: function() {
        this.generator = function(input,options){
            function extend(dest){ for(var i = 1,l=arguments.length,src;i<l;i++){src = arguments[i];if(src){for(var prop in src){if(src.hasOwnProperty(prop)){dest[prop] = src[prop];}}}return dest;}}
            var options = typeof options !== 'undefined' ? extend(options,{env:'dev'}) : {};
            return new Generatorjs(input,options);
        }
    }
});
var isArray = function(value) {    // check native isArray first
    return Object.prototype.toString.call(value) === '[object Array]';
};

function wrap(e){
    var el = document.createElement("div");
    el.appendChild(e);
    return el.innerHTML;
}

function nodeListToArray(node){
    if(isArray(node)){
        return node;
    }else{
       return Array.prototype.map.call( node,function(x){
            return x;
        });
    }
}

function walkThrough(arr, arr2){
    if(!isArray(arr) || !isArray(arr2)){
        throw new TypeError("Argument must be of array!");
    }
    if(arr.length !== arr2.length){
        throw new TypeError("Both argument presented must be of array!");
    }
    var res = [];
    for(var i=0; i < arr.length; i++){
        res.push([arr[i], arr2[i]]);
    }
    return res;
}

QUnit.test( "object creation tests", function( assert ) {
    assert.equal( wrap(this.generator({
        el:"div",
        attr:'id=test'

    }).$el) , wrap($('<div id="test"></div>').get(0)));

    assert.equal( wrap(this.generator({
        el:"div",
        attr:'id=test,class=cls'

    }).$el) , wrap($('<div id="test" class="cls"></div>').get(0)));

    assert.equal( wrap(this.generator({
        el:"div",
        attr:'id=test,class=cls,customAttr=custom'

    }).$el) , wrap($('<div id="test" class="cls" customAttr="custom"></div>').get(0)));

    assert.equal( wrap(this.generator({
        el:"div",
        attr:'id=test,class=cls',
        child:[
            {
                el:'div',
                attr:'id=ch1'
            }
        ]

    }).$el) , wrap($('<div id="test" class="cls"><div id="ch1"></div></div></div>').get(0)));

    assert.equal( wrap(this.generator({
        el:"div",
        attr:'id=test,class=cls',
        child:[
            {
                el:'div',
                attr:'id=ch1'
            },
            {
                el:'img',
                attr:'src=http://example.com/test.gif'
            }
        ]

    }).$el) , wrap($('<div id="test" class="cls"><div id="ch1"></div><img src="http://example.com/test.gif"></div>').get(0)));


});

QUnit.test( "string creation tests", function( assert ) {
    assert.equal( wrap(this.generator("div").$fragment) , $('<div><div></div></div>').html());
    assert.equal( wrap(this.generator("div div").$fragment) , $('<div><div></div><div></div></div>').html());
    assert.equal( wrap(this.generator("div div..div").$fragment) , $('<div><div></div><div><div></div></div></div>').html());
    assert.equal( wrap(this.generator("div div..div..div").$fragment) , $('<div><div></div><div><div><div></div></div></div></div>').html());
    assert.equal( wrap(this.generator("div div div..div..div").$fragment) , $('<div><div></div><div></div><div><div><div></div></div></div></div>').html());
    assert.equal( wrap(this.generator("div div..div div..div..div").$fragment) , $('<div><div></div><div><div></div></div><div><div><div></div></div></div></div>').html());
    assert.equal( wrap(this.generator("div div..div..div div..div..div").$fragment) , $('<div><div></div><div><div><div></div></div></div><div><div><div></div></div></div></div>').html());
    assert.equal( wrap(this.generator("div div..div..div(class=test) div..div..div").$fragment) , $('<div><div></div><div><div><div class="test"></div></div></div><div><div><div></div></div></div></div>').html());
    assert.equal( wrap(this.generator("div div..div..div(class=test) div(id=myId)..div..div").$fragment) , $('<div><div></div><div><div><div class="test"></div></div></div><div id="myId"><div><div></div></div></div></div>').html());
    assert.equal( wrap(this.generator("div..div div").$fragment) , $('<div><div><div></div></div><div></div></div>').html());
    assert.equal( wrap(this.generator("div(id=test)").$fragment) , $('<div><div id="test"></div></div>').html());
    assert.equal( wrap(this.generator("div(class=test)").$fragment) , $('<div><div class="test"></div></div>').html());
    assert.equal( wrap(this.generator("div(class=test,customAttr=custom)").$fragment) , $('<div><div class="test" customAttr="custom"></div></div>').html());
    assert.equal( wrap(this.generator("img(src=http://example.com/test.gif)").$fragment) , $('<div><img src="http://example.com/test.gif" /></div>').html());

});

QUnit.test( "getString() tests", function( assert ) {
    assert.equal( this.generator("div").getString() , $('<div><div></div></div>').html());
    assert.equal( this.generator("div div").getString() , $('<div><div></div><div></div></div>').html());
    assert.equal( this.generator("div div..div").getString() , $('<div><div></div><div><div></div></div></div>').html());
    assert.equal( this.generator("div div..div..div").getString() , $('<div><div></div><div><div><div></div></div></div></div>').html());
    assert.equal( this.generator("div div div..div..div").getString() , $('<div><div></div><div></div><div><div><div></div></div></div></div>').html());
    assert.equal( this.generator("div div..div div..div..div").getString() , $('<div><div></div><div><div></div></div><div><div><div></div></div></div></div>').html());
    assert.equal( this.generator("div div..div..div div..div..div").getString() , $('<div><div></div><div><div><div></div></div></div><div><div><div></div></div></div></div>').html());
    assert.equal( this.generator("div div..div..div(class=test) div..div..div").getString() , $('<div><div></div><div><div><div class="test"></div></div></div><div><div><div></div></div></div></div>').html());
    assert.equal( this.generator("div div..div..div(class=test) div(id=myId)..div..div").getString() , $('<div><div></div><div><div><div class="test"></div></div></div><div id="myId"><div><div></div></div></div></div>').html());
    assert.equal( this.generator("div..div div").getString() , $('<div><div><div></div></div><div></div></div>').html());
    assert.equal( this.generator("div(id=test)").getString() , $('<div><div id="test"></div></div>').html());
    assert.equal( this.generator("div(class=test)").getString() , $('<div><div class="test"></div></div>').html());
    assert.equal( this.generator("div(class=test,customAttr=custom)").getString() , $('<div><div class="test" customAttr="custom"></div></div>').html());
    assert.equal( this.generator("img(src=http://example.com/test.gif)").getString() , $('<div><img src="http://example.com/test.gif" /></div>').html());

});

QUnit.test( "selecting elements tests", function( assert ) {
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
                        },
                        {
                            el:'button',
                            attr:'id=btn2',
                            child:[
                                {
                                    el:"span",
                                    attr:"id=span1",
                                    inner:"Click Me"
                                },
                                {
                                    el:"div",
                                    attr:"id=newDiv,name=test"
                                }
                            ]
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

    var $el = generator.$el;
    assert.equal( generator.get('#div2').$selected.parentNode.firstChild.innerHtml , $($el).find('#div2').get(0).parentNode.firstChild.innerHtml);
    assert.deepEqual( generator.get('button').$selected , $($el).find('button').get());
    assert.deepEqual( generator.get('#span1').$selected.parentNode.firstChild.innerHtml , $($el).find('#span1').get(0).parentNode.firstChild.innerHtml);
    assert.deepEqual( generator.get('#span1').$selected.innerHtml , $($el).find('#span1').get(0).innerHtml);
    assert.deepEqual( wrap(generator.get('*').$selected) , wrap($($el).get(0)));
    assert.deepEqual( generator.get('name=test').$selected[0] , $($el).find("[name='test']").get(0));
    assert.deepEqual( generator.get('name=test').$selected , $($el).find("[name='test']").get());
    var t1 = walkThrough(nodeListToArray(generator.get('.c').$selected), nodeListToArray($($el).find('.c').get()), assert);
    for(var i=0; i< t1.length; i++){
        assert.equal( wrap(t1[i][0]), wrap(t1[i][1]));
    }
});

