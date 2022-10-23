import { getStringOfElement } from '../dom-utils'

export default function () {
    return getStringOfElement(this.$selected ? this.$selected : this.$fragment)
}
