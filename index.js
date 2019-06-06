const calculator = {
  read: function read(valueA, valueB) {
    this.valueA = prompt('please enter A value:', '0'), 
    this.valueB = prompt('please enter B value:', '0');
  },
  sum: function sum(a, b) {
    a = this.valueA;
    b = this.valueB;
    return `A + B = ${parseInt(a) + parseInt(b)}`;
  },
  min: function min(a, b) {
    a = this.valueA;
    b = this.valueB;
    return `A - B = ${parseInt(a) - parseInt(b)}`;
  },
  mul: function mul(a, b) {
    a = this.valueA;
    b = this.valueB;
    return `A * B = ${parseInt(a) * parseInt(b)}`;
  },
  div: function div(a, b) {
    a = this.valueA;
    b = this.valueB;
    return `A / B = ${parseInt(a) / parseInt(b)}`;
  }
};
document.querySelector('#sum').addEventListener('click', function () {
  calculator.read();
  alert(calculator.sum());
});
document.querySelector('#mul').addEventListener('click', function () {
  calculator.read();
  alert(calculator.mul());
});
document.querySelector('#min').addEventListener('click', function () {
  calculator.read();
  alert(calculator.min());
});
document.querySelector('#div').addEventListener('click', function () {
  calculator.read();
  alert(calculator.div());
});
