import GeneratorJs from '../index'

export default function setContent(this: GeneratorJs, content, elem) {
    if (elem !== null) {
        _html(elem, content)
    }
    if (isString(content)) {
        _html(this.$selected, content)
    }
    return this
}
