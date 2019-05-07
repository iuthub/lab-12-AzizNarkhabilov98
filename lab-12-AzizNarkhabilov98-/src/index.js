import {multiply, divide} from './js/funcs'
import {loadPage} from './js/ajax'
import './scss/styles.scss';

// console.log(multiply(4,5));
// console.log(divide(10,2));
// console.log(story);

loadPage();

{
    let customer='Sarvar'
    console.log(customer);
}

let arr=[1,2,3];
let x2=arr.map(x=>x*x)
console.log(x2);

function printAll(...params){
  for(let p of params){
    console.log(p);
  }
}

printAll(1,2,3,4,5,6);

function printInfo({serverName='localhost', 
                    portNumber=80,
                    path='/'}={}){
    
    console.log(serverName);
    console.log(portNumber);
    console.log(path);
}

printInfo({serverName:'inha.uz'});


class Person {
    constructor(name){
        this.name=name;
    }
}

class Student extends Person {
    constructor(name, grade){
        super(name);
        this.grade=grade;
    }
}

let s = new Student('Sarvar', 5);
console.log(s.name);


function computeHardTask() {
    return new Promise((success, error)=>{
        setTimeout(function(){
            success("Task is finished");
        }, 2000);
    });
}

function printWithCourtesy(msg){
    return new Promise((success, error)=>{
        setTimeout(function(){
            success(msg+",please!");
        },2000)
    });
}


computeHardTask()
        .then(printWithCourtesy)
        .then(console.log);


async function callHardTasks() {
    let msg=await computeHardTask();
    let msg2=await printWithCourtesy(msg);

    console.log(msg2);
}

callHardTasks();


function* generator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let gen=generator()

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());





















