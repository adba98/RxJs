import { interval, Observer, timer } from 'rxjs';

const observer: Observer<number> = {
  next: (value): void => console.log('Next', value),
  error: (error): void => console.warn('Error:', error),
  complete: (): void => console.info('Complete'),
};

const todayTo5 = new Date();
todayTo5.setSeconds(todayTo5.getSeconds() + 5);

const interval$ = interval(1000);

// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(todayTo5);

console.log('Inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');
