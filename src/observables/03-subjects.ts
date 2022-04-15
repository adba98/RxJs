import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value): void => console.log("Next", value),
  error: (error): void => console.warn("Error:", error),
  complete: (): void => console.info("Complete"),
};

const intervalo$ = new Observable<number>((subs) => {
  const interval = setInterval((): void => {
    subs.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("Clean Interval");
  };
});

const subject$ = new Subject();

const intervalSsubject = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout((): void => {
  subject$.next(10);
  subject$.complete();
  intervalSsubject.unsubscribe();
  console.log("Timeout Completed");
}, 3000);
