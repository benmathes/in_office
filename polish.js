
var a = [2, 1, '+', 3, '*']; // ((2 + 1) * 3) -> 9

var b = [4, 10, 5, '/', '+']; // ((10/5) + 4) -> 6


function compute(expression) {
  var stack = [];
  for (var i=0; i < expression.length; i++) {
    if (typeof(expression[i]) === 'string') {
      // pop off top two from stack, apply operator
      var second = stack.pop().toString();
      var first = stack.pop().toString();
      var thisExpression = eval(first + ' ' + expression[i] + ' ' + second);
      stack.push(thisExpression);
    } else {
      stack.push(parseFloat(expression[i]));
    }
  }
  return stack[0];
};


console.log('a:' + compute(a));

console.log('b:' + compute(b));
