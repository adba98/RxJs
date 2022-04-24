import { fromEvent } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

const observer = {
  next: (value) => console.log('Value:', value),
  complete: () => console.info('Complete'),
};

/* 
range(1, 5)
  .pipe(map<number, number>((value) => value * 10))
  .subscribe(observer);
 */

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(map((event) => event.code));
keyupCode$.subscribe(observer);

const keyupTo$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupMapTo$ = keyupTo$.pipe(mapTo('key'));
keyupMapTo$.subscribe((value) => console.log('Key:', value));
