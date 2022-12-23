import { BaseError } from './BaseError'

export class NoElementSelectedError extends BaseError {
    constructor() {
        super('No element selected.')

        Object.setPrototypeOf(this, NoElementSelectedError.prototype)
    }
}
