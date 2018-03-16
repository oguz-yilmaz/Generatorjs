QUnit.module( "Dom Generator Tests", {
    beforeEach: function() {
        this.generator = function(input,options){
            function extend(dest){ for(var i = 1,l=arguments.length,src;i<l;i++){src = arguments[i];if(src){for(var prop in src){if(src.hasOwnProperty(prop)){dest[prop] = src[prop];}}}return dest;}}
            var options = typeof options !== 'undefined' ? extend(options,{env:'dev'}) : {};
            return new Generatorjs(input,options);
        }
    }
});

function wrap(e){
    var el = document.createElement("div");
    el.appendChild(e);
    return el.innerHTML;
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
    assert.equal( wrap(this.generator("div").$el) , wrap($('<div></div>').get(0)));
    assert.equal( wrap(this.generator("div div").$el) , wrap($('<div></div> <div></div>').get(0)));
    assert.equal( wrap(this.generator("div(id=test)").$el) , wrap($('<div id="test"></div>').get(0)));
    assert.equal( wrap(this.generator("div(class=test)").$el) , wrap($('<div class="test"></div>').get(0)));
    assert.equal( wrap(this.generator("div(class=test,customAttr=custom)").$el) , wrap($('<div class="test" customAttr="custom"></div>').get(0)));
    assert.equal( wrap(this.generator("img(src=http://example.com/test.gif)").$el) , wrap($('<img src="http://example.com/test.gif" />').get(0)));

});

QUnit.test( "selecting elements tests", function( assert ) {
    assert.equal( wrap(this.generator("div").$el) , wrap($('<div></div>').get(0)));
});

