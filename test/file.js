const variableFunction = (a, b) => {
    return a * b
}

function myFunction (a, b) {
    return a * b
}

const objectFunction = {
    a: 0,
    b: 0,
    calculate: function() {
      return this.a * this.b;
    }
}