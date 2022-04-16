import { Observer, asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

// const greet = (): void => console.log('Hola');
const greetName = (name: string): void => console.log('Hola', name);

// asyncScheduler.schedule(greet, 3000);
// asyncScheduler.schedule(greetName, 3000, 'Oscar');

const subs$ = asyncScheduler.schedule(
  function (state) {
    console.log('state', state);
    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

/*
  setTimeout(() => {
    subs$.unsubscribe();
  }, 6000); 
*/

asyncScheduler.schedule(() => subs$.unsubscribe(), 6000);
