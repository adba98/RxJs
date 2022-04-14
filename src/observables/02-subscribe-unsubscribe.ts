import { Observable, Observer } from "rxjs";

/*
    Complete y unsubscribe son diferentes
*/

const observer: Observer<any> = {
  next: (value): void => console.log("Next", value),
  error: (error): void => console.warn("Error:", error),
  complete: (): void => console.info("Complete"),
};

const intervalo$ = new Observable<number>((subs) => {
  let count = 0;
  const interval = setInterval((): void => {
    count++;
    subs.next(count);
    console.log(count);
  }, 1000);

  setTimeout((): void => {
    subs.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log("Clean Interval");
  };
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

/* 
    Diferent Options
    subs1.add(subs2.add(subs3));
*/

subs1.add(subs2);
subs1.add(subs3);

setTimeout((): void => {
  subs1.unsubscribe();
  console.log("Timeout Completed");
}, 3000);
