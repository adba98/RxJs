import { Observer, of } from "rxjs";

const observer: Observer<any> = {
  next: (value): void => console.log("Next", value),
  error: (error): void => console.warn("Error:", error),
  complete: (): void => console.info("Complete"),
};

// const obs$ = of(1, 2, 3, 4, 5, 6);
// const obs$ = of(...[1, 2, 3, 4, 5, 6], 7, 8, 9);
const obs$ = of(1, 2, 3, 4, 5, 6);

console.log("Inicio de Obs");
obs$.subscribe(observer);
console.log("Fin de Obs");
