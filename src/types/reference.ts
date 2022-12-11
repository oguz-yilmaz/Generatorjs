// Already defined in lib.dom.d.ts, moved here for quick references
export interface GeneratorDocument extends DocumentFragment {
    append(...nodes: (Node | string)[]): void
    prepend(...nodes: (Node | string)[]): void

    querySelector<K extends keyof HTMLElementTagNameMap>(
        selectors: K
    ): HTMLElementTagNameMap[K] | null
    querySelector<K extends keyof SVGElementTagNameMap>(
        selectors: K
    ): SVGElementTagNameMap[K] | null
    querySelector<E extends Element = Element>(selectors: string): E | null

    querySelectorAll<K extends keyof HTMLElementTagNameMap>(
        selectors: K
    ): NodeListOf<HTMLElementTagNameMap[K]>
    querySelectorAll<K extends keyof SVGElementTagNameMap>(
        selectors: K
    ): NodeListOf<SVGElementTagNameMap[K]>
    querySelectorAll<E extends Element = Element>(
        selectors: string
    ): NodeListOf<E>

    replaceChildren(...nodes: (Node | string)[]): void
}

export interface GeneratorNode extends Node {}
