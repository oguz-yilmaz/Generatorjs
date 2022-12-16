import { isString, setHtml } from '@utils'
import { GeneratorJs } from '@generatorjs'

export default function setContent(this: GeneratorJs, content: string) {
    if (isString(content)) {
        setHtml(this.$selected, content)
    }

    return this
}
