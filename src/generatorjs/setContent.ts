import { isString, setHtml } from '@utils'
import GeneratorJs from '@generator'

export default function setContent(this: GeneratorJs, content, elem) {
    if (elem !== null) {
        setHtml(elem, content)
    }
    if (isString(content)) {
        setHtml(this.$selected, content)
    }
    return this
}
