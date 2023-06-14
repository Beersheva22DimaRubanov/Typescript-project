"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = __importDefault(require("./Rectangle"));
var n = 10;
n = 20;
var num = 5;
num = "abc";
var ar = [];
ar.push('abc');
var ar1 = ['abc', 10];
;
var ar2 = [];
var map1 = new Map([['abc', 20]]);
console.log(map1.get('abc'));
Array.from(map1.entries()).forEach(function (e) { return console.log("".concat(e[0], " -> ").concat(e[1])); });
var comparator = function (num1, num2) {
    return num1 > num2 ? 1 : -1;
};
function displayPerson(prs) {
    prs.gender && console.log(prs.gender.substring(0, 3));
}
displayPerson({ id: 123, date: '2000-10-10', name: 'Vasya', gender: 'male' });
function cipher(text, key) {
    var arr = Array.from(text);
    var arr1 = [];
    arr.map(function (el) {
        console.log(text.charCodeAt(text.indexOf(el)));
        var index = text.charCodeAt(text.indexOf(el));
        var newIndex = index + key;
        el = String.fromCharCode(newIndex > 126 ? (newIndex - 126) + 31 : newIndex);
        console.log(el);
    });
    return arr1.join('');
}
function decipher(text, key) {
    var arr = Array.from(text);
    var arr1 = [];
    for (var i = 0; i < arr.length; i++) {
        var index = text.charCodeAt(i);
        var newIndex = index - key;
        arr1[i] = String.fromCharCode(newIndex < 32 ? (127 - newIndex) : newIndex);
    }
    return arr1.join('');
}
var res = cipher("home", 10);
console.log('Cipher: ' + res);
console.log('Decipher: ' + decipher(res, 10));
var shape = new Rectangle_1.default(3, 4);
var width = shape.width;
//# sourceMappingURL=main.js.map