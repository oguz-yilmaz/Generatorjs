export default function () {
    if (this.$prevEl) this.$el = this.$prevEl
    if (this.$prevFragment) this.$fragment = this.$prevFragment
}
