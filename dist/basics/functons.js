"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 2));
// declaring functions type
var combineValues;
combineValues = add;
console.log(combineValues(5, 5));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
//# sourceMappingURL=functons.js.map