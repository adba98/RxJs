import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

interface Character {
  type: string;
  name: string;
}

const character: Character[] = [
  { type: 'heroe', name: 'spiderman' },
  { type: 'heroe', name: 'daredevil' },
  { type: 'villano', name: 'venom' },
];

/* 
range(5, 15)
  .pipe(
    filter((val, index) => {
      console.log('index', index);

      return val % 2 === 1;
    })
  )
  .subscribe(console.log);
*/

from(character)
  .pipe(filter((val) => val.type === 'villano'))
  .subscribe(console.log);
