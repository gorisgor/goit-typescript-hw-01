/////////////////////////////// basic
// Task 1
import { age, username, toggle, empty, callback } from './basic/1'
console.log('task1', age);
console.log('task1', username);
console.log('task1', toggle);
console.log('task1', empty);
console.log('task1', callback(100));
// Task 2
import { person } from './basic/2'
console.log('task2',person);
// Task 3
import { mixVar, switcher } from './basic/3';
console.log('task3', mixVar);
console.log('task3', switcher);
// Task 4
import { showMessage, calc, customError } from './basic/4';
showMessage('Hello world');
console.log ('task4', calc(12, 25));
try {
  customError();
} catch (error) {
  console.error('task4 Error:', error);
}
// Task 5
import { isWeekend, DayOfWeek } from './basic/5';
const day = DayOfWeek.Monday
const res = isWeekend(day)
console.log('task5',`Is ${DayOfWeek[day]} a weekend? ${res}`)
// Task 6
import { mango, poly } from './basic/6';
console.log('task6', mango);
console.log('task6', poly);
// Task 7
import { page1, page2 } from './basic/7'
console.log('task7', page1);
console.log('task7', page2);

/////////////////////////////// generics
// Task 1
import {fetchData} from './generics/1'
async function getData (){
  try {
    const result = await fetchData('https://jsonplaceholder.typicode.com/posts/1')
    console.log('task1',result);
  } catch (error) {
    console.error(error);
  }
}
getData();
// Task 2
import { compare } from './generics/2';
const top = {name: 'Spare', color: 'Red'}
const bottom = {position: 2, weight: 10}
const resCompare = compare(top, bottom)
console.log('task2',resCompare);
// Task 3
import { merge } from './generics/3';
const name = {
  name: 'Poly',
  lastName: 'Koval'
}
const details = {
  age: 25,
  citizenship: 'Canadian'
}
const newUser = merge(name, details)
console.log('task3',newUser);
// Task 4
// Task 5
import { RoleDescription, UserRole } from './generics/5';
console.log('task5', RoleDescription[UserRole.admin]);
console.log('task5', RoleDescription[UserRole.editor]);
console.log('task5', RoleDescription[UserRole.guest]);
// Task 6
import { Params} from './generics/6'
const user: Params = {
  email: 'bob.marley@mail.eu',
  firstName: 'Bob',
  lastName: 'Marley',
  phone: '555-55-55',
  // cant add here anything
}
console.log('task6', user);


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>  
    <h1>Vite + TypeScript</h1>
    <h2>TS Homework 1</h2>
  </div>
`
