export interface AttributesDefinitions {
    [key: string]: string
}

export interface GeneratorDefinitions {
    el: string
    attrs?: AttributesDefinitions
    inner?: DocumentFragment | Node
    child?: GeneratorDefinitions | GeneratorDefinitions[]
}

export interface ProcessorParameters {
    elem: HTMLElement
    definition: GeneratorDefinitions
    create: (definitions: GeneratorDefinitions) => DocumentFragment | null
}

export enum Attributes {
    ATTRIBUTES = 'attrs',
    INNER = 'inner',
    CHILD = 'child'
}
