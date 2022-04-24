import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupPluck$ = keyup$.pipe(pluck('key'));
const keyupPluckTarget$ = keyup$.pipe(pluck('target', 'baseURI'));

keyupPluck$.subscribe((value) => console.log('Key:', value));
keyupPluckTarget$.subscribe((value) => console.log('Target:', value));
