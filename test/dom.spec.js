const getDomElement = (element) =>
    document.createElement('div').appendChild(e).innerHTML

function nodeListToArray(node) {
    if (Array.isArray(node)) {
        return node
    }

    return Array.prototype.map.call(node, (x) => x)
}

function walkThrough(arr, arr2) {
    if (!Array.isArray(arr) || !Array.isArray(arr2)) {
        throw new TypeError('Argument must be of array!')
    }
    if (arr.length !== arr2.length) {
        throw new TypeError('Both argument presented must be of array!')
    }
    const res = []
    for (let i = 0; i < arr.length; i++) {
        res.push([arr[i], arr2[i]])
    }
    return res
}

test('object creation tests', function (assert) {
    assert.equal(
        getDomElement(
            this.generator({
                el: 'div'
            }).$el
        ),
        getDomElement($('<div></div>').get(0))
    )

    assert.equal(
        getDomElement(
            this.generator({
                el: 'span'
            }).$el
        ),
        getDomElement($('<span></span>').get(0))
    )

    assert.equal(
        getDomElement(
            this.generator({
                el: 'img'
            }).$el
        ),
        getDomElement($('<img />').get(0))
    )

    assert.equal(
        getDomElement(
            this.generator({
                el: 'div',
                attr: 'id=test'
            }).$el
        ),
        getDomElement($('<div id="test"></div>').get(0))
    )

    assert.equal(
        getDomElement(
            this.generator({
                el: 'div',
                attr: 'id=test,class=cls'
            }).$el
        ),
        getDomElement($('<div id="test" class="cls"></div>').get(0))
    )

    assert.equal(
        getDomElement(
            this.generator({
                el: 'div',
                attr: 'id=test,class=cls,customAttr=custom'
            }).$el
        ),
        getDomElement(
            $('<div id="test" class="cls" customAttr="custom"></div>').get(0)
        )
    )

    assert.equal(
        getDomElement(
            this.generator({
                el: 'div',
                attr: 'id=test,class=cls',
                child: [
                    {
                        el: 'div',
                        attr: 'id=ch1'
                    }
                ]
            }).$el
        ),
        getDomElement(
            $(
                '<div id="test" class="cls"><div id="ch1"></div></div></div>'
            ).get(0)
        )
    )

    assert.equal(
        getDomElement(
            this.generator({
                el: 'div',
                attr: 'id=test,class=cls',
                child: [
                    {
                        el: 'div',
                        attr: 'id=ch1'
                    },
                    {
                        el: 'img',
                        attr: 'src=http://example.com/test.gif'
                    }
                ]
            }).$el
        ),
        getDomElement(
            $(
                '<div id="test" class="cls"><div id="ch1"></div><img src="http://example.com/test.gif"></div>'
            ).get(0)
        )
    )
})

test('string creation tests', function (assert) {
    assert.equal(
        getDomElement(this.generator('div').$fragment),
        $('<div><div></div></div>').html()
    )
    assert.equal(
        getDomElement(this.generator('div div').$fragment),
        $('<div><div></div><div></div></div>').html()
    )
    assert.equal(
        getDomElement(this.generator('div div..div').$fragment),
        $('<div><div></div><div><div></div></div></div>').html()
    )
    assert.equal(
        getDomElement(this.generator('div div..div..div').$fragment),
        $('<div><div></div><div><div><div></div></div></div></div>').html()
    )
    assert.equal(
        getDomElement(this.generator('div div div..div..div').$fragment),
        $(
            '<div><div></div><div></div><div><div><div></div></div></div></div>'
        ).html()
    )
    assert.equal(
        getDomElement(this.generator('div div..div div..div..div').$fragment),
        $(
            '<div><div></div><div><div></div></div><div><div><div></div></div></div></div>'
        ).html()
    )
    assert.equal(
        getDomElement(
            this.generator('div div..div..div div..div..div').$fragment
        ),
        $(
            '<div><div></div><div><div><div></div></div></div><div><div><div></div></div></div></div>'
        ).html()
    )
    assert.equal(
        getDomElement(
            this.generator('div div..div..div(class=test) div..div..div')
                .$fragment
        ),
        $(
            '<div><div></div><div><div><div class="test"></div></div></div><div><div><div></div></div></div></div>'
        ).html()
    )
    assert.equal(
        getDomElement(
            this.generator(
                'div div..div..div(class=test) div(id=myId)..div..div'
            ).$fragment
        ),
        $(
            '<div><div></div><div><div><div class="test"></div></div></div><div id="myId"><div><div></div></div></div></div>'
        ).html()
    )
    assert.equal(
        getDomElement(this.generator('div..div div').$fragment),
        $('<div><div><div></div></div><div></div></div>').html()
    )
    assert.equal(
        getDomElement(this.generator('div(id=test)').$fragment),
        $('<div><div id="test"></div></div>').html()
    )
    assert.equal(
        getDomElement(this.generator('div(class=test)').$fragment),
        $('<div><div class="test"></div></div>').html()
    )
    assert.equal(
        getDomElement(
            this.generator('div(class=test,customAttr=custom)').$fragment
        ),
        $('<div><div class="test" customAttr="custom"></div></div>').html()
    )
    assert.equal(
        getDomElement(
            this.generator('img(src=http://example.com/test.gif)').$fragment
        ),
        $('<div><img src="http://example.com/test.gif" /></div>').html()
    )
})

test('getString() tests', function (assert) {
    assert.equal(
        this.generator('div').getString(),
        $('<div><div></div></div>').html()
    )
    assert.equal(
        this.generator('div div').getString(),
        $('<div><div></div><div></div></div>').html()
    )
    assert.equal(
        this.generator('div div..div').getString(),
        $('<div><div></div><div><div></div></div></div>').html()
    )
    assert.equal(
        this.generator('div div..div..div').getString(),
        $('<div><div></div><div><div><div></div></div></div></div>').html()
    )
    assert.equal(
        this.generator('div div div..div..div').getString(),
        $(
            '<div><div></div><div></div><div><div><div></div></div></div></div>'
        ).html()
    )
    assert.equal(
        this.generator('div div..div div..div..div').getString(),
        $(
            '<div><div></div><div><div></div></div><div><div><div></div></div></div></div>'
        ).html()
    )
    assert.equal(
        this.generator('div div..div..div div..div..div').getString(),
        $(
            '<div><div></div><div><div><div></div></div></div><div><div><div></div></div></div></div>'
        ).html()
    )
    assert.equal(
        this.generator(
            'div div..div..div(class=test) div..div..div'
        ).getString(),
        $(
            '<div><div></div><div><div><div class="test"></div></div></div><div><div><div></div></div></div></div>'
        ).html()
    )
    assert.equal(
        this.generator(
            'div div..div..div(class=test) div(id=myId)..div..div'
        ).getString(),
        $(
            '<div><div></div><div><div><div class="test"></div></div></div><div id="myId"><div><div></div></div></div></div>'
        ).html()
    )
    assert.equal(
        this.generator('div..div div').getString(),
        $('<div><div><div></div></div><div></div></div>').html()
    )
    assert.equal(
        this.generator('div(id=test)').getString(),
        $('<div><div id="test"></div></div>').html()
    )
    assert.equal(
        this.generator('div(class=test)').getString(),
        $('<div><div class="test"></div></div>').html()
    )
    assert.equal(
        this.generator('div(class=test,customAttr=custom)').getString(),
        $('<div><div class="test" customAttr="custom"></div></div>').html()
    )
    assert.equal(
        this.generator('img(src=http://example.com/test.gif)').getString(),
        $('<div><img src="http://example.com/test.gif" /></div>').html()
    )
})

test('.reset() tests', (assert) => {
    const generator = new Generatorjs({
        el: 'div',
        attr: 'id=div1,class=cls',
        child: [
            {
                el: 'div',
                attr: 'id=div2,class=c',
                child: [
                    {
                        el: 'button',
                        attr: 'value=click,id=btn'
                    },
                    {
                        el: 'button',
                        attr: 'id=btn2',
                        child: [
                            {
                                el: 'span',
                                attr: 'id=span1',
                                inner: 'Click Me'
                            },
                            {
                                el: 'div',
                                attr: 'id=newDiv,name=test'
                            }
                        ]
                    }
                ]
            },
            {
                el: 'div',
                attr: 'id=div4,name=test,class=c'
            }
        ]
    })

    const { $el } = generator
    let { $selected } = generator.get('div')

    assert.deepEqual(
        getDomElement(generator.reset().$selected),
        getDomElement($($el).get(0))
    )
    $selected = generator.get('#span1').$selected
    assert.deepEqual(
        getDomElement(generator.reset().$selected),
        getDomElement($($el).get(0))
    )
})

test('selecting elements tests', (assert) => {
    const generator = new Generatorjs(
        {
            el: 'div',
            attr: 'id=div1,class=cls',
            child: [
                {
                    el: 'div',
                    attr: 'id=div2,class=c',
                    child: [
                        {
                            el: 'button',
                            attr: 'value=click,id=btn'
                        },
                        {
                            el: 'button',
                            attr: 'id=btn2',
                            child: [
                                {
                                    el: 'span',
                                    attr: 'id=span1',
                                    inner: 'Click Me'
                                },
                                {
                                    el: 'div',
                                    attr: 'id=newDiv,name=test'
                                }
                            ]
                        }
                    ]
                },
                {
                    el: 'div',
                    attr: 'id=div4,name=test,class=c'
                }
            ]
        },

        {
            env: 'dev'
        }
    )

    const { $el } = generator
    assert.equal(
        generator.get('#div2').$selected.parentNode.firstChild.innerHtml,
        $($el).find('#div2').get(0).parentNode.firstChild.innerHtml
    )
    assert.deepEqual(
        generator.get('button').$selected,
        $($el).find('button').get()
    )
    assert.deepEqual(
        generator.get('#span1').$selected.parentNode.firstChild.innerHtml,
        $($el).find('#span1').get(0).parentNode.firstChild.innerHtml
    )
    assert.deepEqual(
        generator.get('#span1').$selected.innerHtml,
        $($el).find('#span1').get(0).innerHtml
    )
    assert.deepEqual(
        getDomElement(generator.get('*').$selected),
        getDomElement($($el).get(0))
    )
    assert.deepEqual(
        generator.get('name=test').$selected[0],
        $($el).find("[name='test']").get(0)
    )
    assert.deepEqual(
        generator.get('name=test').$selected,
        $($el).find("[name='test']").get()
    )

    const generatorJsElectedElements = nodeListToArray(
        generator.get('.c').$selected
    )
    const jQuerySelectedElements = nodeListToArray($($el).find('.c').get())

    for (let i = 0; i < generatorJsElectedElements.length; i++) {
        assert.equal(
            getDomElement(generatorJsElectedElements[i]),
            getDomElement(jQuerySelectedElements[i])
        )
    }
})
