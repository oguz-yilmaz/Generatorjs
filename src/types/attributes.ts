import type { GeneratorJs } from '@generatorjs'

export interface AttributesDefinitions {
    [key: string]: string
}

export interface EventsDefinitions {
    [key: string]: string
}

export interface GeneratorDefinitions {
    el: keyof HTMLElementTagNameMap
    attrs?: AttributesDefinitions
    inner?: DocumentFragment | Node | HTMLElement | string | GeneratorJs
    child?: string | GeneratorDefinitions | GeneratorDefinitions[]
    events?: EventsDefinitions
}

export interface ProcessorParameters {
    elem: HTMLElement
    definitions: GeneratorDefinitions
    create: (definitions: GeneratorDefinitions) => DocumentFragment | null
}
