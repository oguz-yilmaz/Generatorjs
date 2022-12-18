import { GeneratorJs } from '@generatorjs'
import type { GeneratorDefinitions } from 'types'

export default (definitions: GeneratorDefinitions) =>
    new GeneratorJs(definitions)
