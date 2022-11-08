import GeneratorJs from '../index'

export default function prevState(this: GeneratorJs) {
    if (this.$prevEl) {
        this.$el = this.$prevEl
    }

    if (this.$prevFragment) {
        this.$fragment = this.$prevFragment
    }
}
