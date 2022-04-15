import { asyncScheduler, observeOn, Observer, range } from 'rxjs';

const observer: Observer<any> = {
  next: (value): void => console.log('Next', value.key),
  error: (error): void => console.warn('Error:', error),
  complete: (): void => console.info('Complete'),
};

// const src$ = range(1, 7, asyncScheduler);
const src$ = range(0, 5).pipe(observeOn(asyncScheduler));

console.log('Inicio');
src$.subscribe(console.log);
console.log('Fin');
