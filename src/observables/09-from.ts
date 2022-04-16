import { from, of } from 'rxjs';

const observer = {
  next: (value): void => console.log('Value:', value),
  complete: (): void => console.info('Complete'),
};

const myGenerator = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const iterator = myGenerator();

for (let id of iterator) {
  console.log(id);
}

from(iterator).subscribe(observer);

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of([1, 2, 3, 4, 5]);

const source$ = from(fetch('https://api.github.com/users/adba98'));

source$.subscribe(async (resp): Promise<void> => {
  const dataRes = await resp.json();
  console.log(dataRes);
});
