import { Observable, Observer } from "rxjs";

/* 
    Otra forma (no se suele manejar)
    const obs$ = Observable.create()
*/

const obs$ = new Observable<string>((subs): void => {
  subs.next("Hola");
  subs.next("Mundo");
  /*
    // Forzar Error
    const a = undefined;
    a.nombre = 'Oscar';
  */
  subs.complete();
  subs.next("No ejecuta");
});

/* 
    obs$.subscribe(
    (valor): void => {
        console.log("next", valor);
    },
    (error): void => {
        console.warn("error", error);
    },
    (): void => {
        console.warn("complete");
    }
    );
*/

const observer: Observer<any> = {
  next: (value): void => console.log(value),
  error: (error): void => console.error(error),
  complete: (): void => console.info("Complete"),
};

obs$.subscribe(observer);
