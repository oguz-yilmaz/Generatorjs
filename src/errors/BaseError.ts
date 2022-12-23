export class BaseError extends Error {
    constructor(message) {
        super(message)

        Object.setPrototypeOf(this, BaseError.prototype)
    }
}
