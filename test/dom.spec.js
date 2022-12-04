import Generatorjs from '@generator'
import $ from 'jquery'

const nodeListToArray = (node) => {
    if (Array.isArray(node)) {
        return node
    }

    return Array.prototype.map.call(node, (x) => x)
}
test('object creation tests', () => {})
console.log(
    'before: ',
    new Generatorjs({
        el: 'div',
        attr: 'id=test',
        child: [
            {
                el: 'div',
                attr: 'id=teswt'
            }
        ]
    }).get('#btn').$el.innerHTML,
    ': after'
)

// test('object creation tests', function (assert) {
//     expect(
//         new Generatorjs({
//             el: 'div'
//         }).$el
//     ).toEqual($('<div></div>').get(0))

//     expect(
//         new Generatorjs({
//             el: 'span'
//         }).$el
//     ).toEqual($('<span></span>').get(0))

//     expect(
//         new Generatorjs({
//             el: 'img'
//         }).$el
//     ).toEqual($('<img />').get(0))

//     expect(
//         new Generatorjs({
//             el: 'div',
//             attr: 'id=test'
//         }).$el
//     ).toEqual($('<div id="test"></div>').get(0))

//     expect(
//         new Generatorjs({
//             el: 'div',
//             attr: 'id=test,class=cls'
//         }).$el
//     ).toEqual($('<div id="test" class="cls"></div>').get(0))

//     expect(
//         new Generatorjs({
//             el: 'div',
//             attr: 'id=test,class=cls,customAttr=custom'
//         }).$el
//     ).toEqual($('<div id="test" class="cls" customAttr="custom"></div>').get(0))

//     expect(
//         new Generatorjs({
//             el: 'div',
//             attr: 'id=test,class=cls',
//             child: [
//                 {
//                     el: 'div',
//                     attr: 'id=ch1'
//                 }
//             ]
//         }).$el
//     ).toEqual(
//         $('<div id="test" class="cls"><div id="ch1"></div></div></div>').get(0)
//     )

//     expect(
//         new Generatorjs({
//             el: 'div',
//             attr: 'id=test,class=cls',
//             child: [
//                 {
//                     el: 'div',
//                     attr: 'id=ch1'
//                 },
//                 {
//                     el: 'img',
//                     attr: 'src=http://example.com/test.gif'
//                 }
//             ]
//         }).$el
//     ).toEqual(
//         $(
//             '<div id="test" class="cls"><div id="ch1"></div><img src="http://example.com/test.gif"></div>'
//         ).get(0)
//     )
// })

// test('.reset() tests', (assert) => {
//     const generator = new Generatorjs({
//         el: 'div',
//         attr: 'id=div1,class=cls',
//         child: [
//             {
//                 el: 'div',
//                 attr: 'id=div2,class=c',
//                 child: [
//                     {
//                         el: 'button',
//                         attr: 'value=click,id=btn'
//                     },
//                     {
//                         el: 'button',
//                         attr: 'id=btn2',
//                         child: [
//                             {
//                                 el: 'span',
//                                 attr: 'id=span1',
//                                 inner: 'Click Me'
//                             },
//                             {
//                                 el: 'div',
//                                 attr: 'id=newDiv,name=test'
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 el: 'div',
//                 attr: 'id=div4,name=test,class=c'
//             }
//         ]
//     })

//     const { $el } = generator
//     let { $selected } = generator.get('div')

//     expect(generator.reset().$selected).toEqual($($el).get(0))

//     $selected = generator.get('#span1').$selected

//     expect(generator.reset().$selected).toEqual($($el).get(0))
// })

// test('selecting elements tests', (assert) => {
//     const generator = new Generatorjs(
//         {
//             el: 'div',
//             attr: 'id=div1,class=cls',
//             child: [
//                 {
//                     el: 'div',
//                     attr: 'id=div2,class=c',
//                     child: [
//                         {
//                             el: 'button',
//                             attr: 'value=click,id=btn'
//                         },
//                         {
//                             el: 'button',
//                             attr: 'id=btn2',
//                             child: [
//                                 {
//                                     el: 'span',
//                                     attr: 'id=span1',
//                                     inner: 'Click Me'
//                                 },
//                                 {
//                                     el: 'div',
//                                     attr: 'id=newDiv,name=test'
//                                 }
//                             ]
//                         }
//                     ]
//                 },
//                 {
//                     el: 'div',
//                     attr: 'id=div4,name=test,class=c'
//                 }
//             ]
//         },

//         {
//             env: 'dev'
//         }
//     )

//     const { $el } = generator
//     expect(
//         generator.get('#div2').$selected.parentNode.firstChild.innerHtml
//     ).toEqual($($el).find('#div2').get(0).parentNode.firstChild.innerHtml)

//     expect(generator.get('button').$selected).toEqual(
//         $($el).find('button').get()
//     )

//     expect(
//         generator.get('#span1').$selected.parentNode.firstChild.innerHtml
//     ).toEqual($($el).find('#span1').get(0).parentNode.firstChild.innerHtml)

//     expect(generator.get('#span1').$selected.innerHtml).toEqual(
//         $($el).find('#span1').get(0).innerHtml
//     )

//     expect(generator.get('*').$selected).toEqual($($el).get(0))

//     expect(generator.get('name=test').$selected[0]).toEqual(
//         $($el).find("[name='test']").get(0)
//     )

//     expect(generator.get('name=test').$selected).toEqual(
//         $($el).find("[name='test']").get()
//     )

//     const jQuerySelectedElements = nodeListToArray($($el).find('.c').get())
//     const generatorJsElectedElements = nodeListToArray(
//         generator.get('.c').$selected
//     )

//     for (let i = 0; i < generatorJsElectedElements.length; i++) {
//         expect(generatorJsElectedElements[i]).toEqual(jQuerySelectedElements[i])
//     }
// })
