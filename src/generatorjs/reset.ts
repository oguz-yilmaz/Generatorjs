import { GeneratorJs } from '@generatorjs'

export default function reset(this: GeneratorJs) {
    this.$selected = null

    return this
}
