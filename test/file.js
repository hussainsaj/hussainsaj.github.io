export function myFunction () {
    this.a = 0
    this.b = 0
    this.calculate = () => {
        return this.a * this.b
    }
}