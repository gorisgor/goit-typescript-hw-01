import { age, username, toggle, empty, callback } from './basic/1'
console.log('task1', age);
console.log('task1', username);
console.log('task1', toggle);
console.log('task1', empty);
console.log('task1', callback(100));

import { person } from './basic/2'
console.log('task2',person);

import { mixVar, toggle1 } from './basic/3';
console.log('task3', mixVar);
console.log('task3', toggle1);

import { showMessage, calc, customError } from './basic/4';
showMessage('Hello world');
console.log ('task4', calc(12, 25));
try {
  customError();
} catch (error) {
  console.error('task4 Error:', error);
}

import { isWeekend } from './basic/5';



import { mango, poly } from './basic/6';
console.log('task6', mango);
console.log('task6', poly);







document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
       
    <h1>Vite + TypeScript</h1>
    
  </div>
`
