import Rectangle from "./Rectangle";

let n = 10;
n = 20;
let num: number | 'abc' = 5;
num = "abc"

const ar:string[] = [];
ar.push('abc');

const ar1:[string, number?] = ['abc', 10];
;


const ar2:Array<string> = [];
const map1: Map<string, number> = new Map([['abc', 20]]);
console.log(map1.get('abc'));
Array.from(map1.entries()).forEach(e => console.log(`${e[0]} -> ${e[1]}`));

type Comparator<T> = (p1: T, p2:T) => number;
let comparator: Comparator<number> = function(num1: number, num2: number) {
    return num1 > num2? 1: -1
}

type Person = {id: number, date: Date|string, name:string, gender?: 'male'|'female'}

function displayPerson( prs: Person): void{
    prs.gender && console.log(prs.gender.substring(0, 3));
    
}

displayPerson({id: 123, date: '2000-10-10', name: 'Vasya', gender: 'male'});

function cipher(text: string, key: number): string{
    //TODO 
    //
  const arr: string[] =  Array.from(text)
  let arr1: string[] =  []
//   for(let i = 0; i<arr.length; i++){
//     let index = text.charCodeAt(i)
//     const newIndex = index+key;
//     arr1[i] = String.fromCharCode(newIndex > 126? (newIndex-126) + 31: newIndex)
//   }
//   return arr1.join('');

arr.map(el => {
        console.log(text.charCodeAt(text.indexOf(el)))
       let index: number = text.charCodeAt(text.indexOf(el));
       const newIndex = index+key;
        el = String.fromCharCode(newIndex > 126? (newIndex-126) + 31: newIndex)
        console.log(el);
    });
return arr1.join('');
}


function decipher(text: string, key: number): string{
    const arr: string[] =  Array.from(text)
    const arr1: string[] =  []
    for(let i = 0; i<arr.length; i++){
      let index = text.charCodeAt(i)
      const newIndex = index-key;
      arr1[i] = String.fromCharCode(newIndex < 32? (127-newIndex): newIndex)
    }
    return arr1.join('');

    // return  Array.from(text).map(el => {
    //     let index: number = text.charCodeAt(text.indexOf(el));
    //     const newIndex = index-key;
    //      el = String.fromCharCode(newIndex < 32? (127-newIndex): newIndex)
    //  }).join('');
}

const res: string = cipher("home", 10)
console.log('Cipher: ' +  res)
console.log('Decipher: ' + decipher(res, 10))

const shape: Rectangle = new Rectangle(3,4);
let width = shape.width;
