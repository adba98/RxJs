import { range, tap } from 'rxjs';
import { map } from 'rxjs/operators';

const numeros$ = range(0, 5);

numeros$
  .pipe(
    tap((val) => console.log('Antes', val)),
    map((val) => val * 10),
    tap({
      next: (val) => console.log('Despues', val),
      complete: () => console.log('Termino'),
    })
  )
  .subscribe((val) => console.log('subs', val));
