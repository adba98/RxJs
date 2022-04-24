import { interval, reduce, take } from 'rxjs';
const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulator: number, valorActual: number): number => {
  return acumulator + valorActual;
};

const total = numbers.reduce(totalReducer, 0);
console.log('Reduce JS:', total);

const observer = {
  next: (value: any) => console.log('Next:', value),
  complete: () => console.info('Complete'),
};

interval(500).pipe(take(6), reduce(totalReducer)).subscribe(observer);
