import { GeneratorJs } from '@generatorjs'
import type { GeneratorDefinitions } from 'types'

// Pass down all other document method & props to internal Fragment
const documentHandler = {
    get(generator, prop) {
        if (!generator[prop]) {
            const fragment = generator.getFragment()

            return fragment[prop]
        }

        return generator[prop]
    }
}

export default function factory(definitions: GeneratorDefinitions) {
    return new Proxy(new GeneratorJs(definitions), documentHandler)
}
