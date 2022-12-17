import Generator from '@generator'
import { GeneratorJs } from '@generatorjs'

test('Can construct GeneratorJs without error', () => {
    Generator({
        el: 'div',
        attrs: {
            id: 'test-id',
            name: 'test-name'
        },
        child: [
            {
                el: 'span',
                attrs: {
                    name: 'span1'
                }
            },
            {
                el: 'span',
                attrs: {
                    name: 'span2'
                },
                inner: 'This is a test span',
                child: [
                    {
                        el: 'img',
                        attrs: {
                            alt: 'Test image'
                        }
                    }
                ]
            }
        ]
    })
})
