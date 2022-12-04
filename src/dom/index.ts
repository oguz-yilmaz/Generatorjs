import type { GeneratorDefinitions } from 'types'
import { EMPTY_OBJECT } from '@constants'
import { isPlainObject, hasOwn, isDef, setHtml, emptyArray } from '@utils'
import { createElement, appendTo } from './utils'

export const setAttributes = (elem, attributes) => {
    if (isDef(attributes) && Array.isArray(attributes)) {
        for (let i = 0, attr; i < attributes.length; i += 1) {
            attr = attributes[i]
            elem.setAttribute(attr[0], attr[1])
        }
    }

    return elem
}

export const attributeSplitter = (input) => {
    const regExpAttribute = /\(([^)]+)\)/ // between  ( .. )

    const matches =
        input.indexOf('(') !== -1 && input.indexOf(')') !== -1
            ? regExpAttribute.exec(input)
            : input
    let attributes
    const resultArray = []

    if (matches !== null) {
        attributes =
            Array.isArray(matches) && isDef(matches[1])
                ? matches[1].split(',')
                : matches.split(',')

        // @ts-ignore
        const isNonEmptySplit = (arr) => !arr.includes('') && arr.length > 0

        if (isNonEmptySplit(attributes)) {
            for (let p = 0, keyVal; p < attributes.length; p++) {
                keyVal = attributes[p].split('=')
                if (isNonEmptySplit(keyVal)) {
                    // @ts-ignore
                    resultArray.push([keyVal[0], keyVal[1]])
                }
            }
        }
    }

    return resultArray
}

export const create = (definitions: GeneratorDefinitions) => {
    if (!definitions) {
        throw new Error('No definition specified')
    }

    /**
     * The DocumentFragment interface represents a minimal document object that has no parent.
     *
     * It is used as a in-memory version of Document that stores a segment of a document structure
     * comprised of nodes just like a standard document. The key difference is that document fragment
     * isn't part of the active document tree structure. Changes made to the fragment don't affect
     * the document.
     *
     * @param DocumentFragment fragment
     */
    const fragment = window.document.createDocumentFragment()

    if (isPlainObject(definitions) && definitions !== EMPTY_OBJECT) {
        definitions = [definitions]
    }

    let elem = null
    for (let i = 0; i < definitions.length; i = +1) {
        elem = createElement(definitions[i]?.el || 'div')

        // const chain = new TaskChain(definitions[i])
        // chain.registerTask(innerProcessor)
        // chain.registerTask(attributeProcessor)
        // chain.registerTask(whateverProcessor)
        // const elem = chain.processChain()
        // fragment.appendChild(elem)

        if (hasOwn(definitions[i], 'attr')) {
            // attributeCreator.create(elem, definitions[i].attr)
            setAttributes(elem, attributeSplitter(definitions[i].attr))
        }

        // with inner attribute we directly replace the innerHTML with another
        // DOM Element | Generatorjs object | NodeList
        if (hasOwn(definitions[i], 'inner')) {
            setHtml(elem, definitions[i].inner)
        }

        if (hasOwn(definitions[i], 'child')) {
            if (
                Array.isArray(definitions[i].child) &&
                !emptyArray(definitions[i].child)
            ) {
                appendTo(elem, create(definitions[i].child))
            } else {
                throw new TypeError('Child elements must be an array.')
            }
        }

        if (elem) {
            fragment.appendChild(elem)
        }
    }

    return fragment
}
