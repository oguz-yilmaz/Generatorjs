import { GeneratorJs } from '@generator'

export default function reset(this: GeneratorJs) {
    this.$selected = null

    return this
}
