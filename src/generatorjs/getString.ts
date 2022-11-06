import { getStringOfElement } from '../dom-utils'

export default function getString() {
    return getStringOfElement(this.$selected ? this.$selected : this.$fragment)
}
