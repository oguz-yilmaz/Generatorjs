import { getStringOfElement } from '@dom-utils'
import GeneratorJs from '../index'

export default function getString(this: GeneratorJs) {
    return getStringOfElement(this.$selected ? this.$selected : this.$fragment)
}
