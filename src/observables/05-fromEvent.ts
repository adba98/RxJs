import { fromEvent, Observer } from 'rxjs';

/* Eventos del DOM */
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

src1$.subscribe(({ x, y }): void => console.log('Mouse', x, y));

src2$.subscribe((value): void => console.log('KeyCode', value.code));
