import { NoElementSelectedError } from '@errors'
import { GeneratorJs } from '@generatorjs'
import { removeNodes } from '@dom/utils'

export default function remove(this: GeneratorJs): GeneratorJs {
    if (!this.$selected) {
        throw new NoElementSelectedError()
    }

    removeNodes(this.$selected)

    this.reset()

    return this
}
