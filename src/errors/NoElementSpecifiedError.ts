import { BaseError } from './BaseError'

export class NoElementSpecifiedError extends BaseError {
    constructor() {
        super('No element specified.')

        Object.setPrototypeOf(this, NoElementSpecifiedError.prototype)
    }
}
