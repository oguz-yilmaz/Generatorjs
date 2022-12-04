export interface GeneratorDefinitions {
    attrs: keyof HTMLElement
    inner: DocumentFragment | Node
    child: GeneratorDefinitions | GeneratorDefinitions[]
}
