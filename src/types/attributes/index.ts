export interface GeneratorDefinitions {
    attrs: keyof HTMLElement
    inner: DocumentFragment | Node
    child: GeneratorDefinitions | GeneratorDefinitions[]
}

export enum Attributes {
    ATTRIBUTES = 'attrs',
    INNER = 'inner',
    CHILD = 'child'
}
