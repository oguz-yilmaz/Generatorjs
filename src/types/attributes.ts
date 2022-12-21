export interface AttributesDefinitions {
    [key: string]: string
}

export interface GeneratorDefinitions {
    el: keyof HTMLElementTagNameMap
    attrs?: AttributesDefinitions
    inner?: DocumentFragment | Node | HTMLElement | string
    child?: string | GeneratorDefinitions | GeneratorDefinitions[]
}

export interface ProcessorParameters {
    elem: HTMLElement
    definitions: GeneratorDefinitions
    create: (definitions: GeneratorDefinitions) => DocumentFragment | null
}
