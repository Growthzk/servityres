import { useRef } from "react";

type Noop = (...args: any[]) => any;

export function usePersistFn<T extends Noop>(fn: T): T {
  const fnRef = useRef<T>(fn);
  fnRef.current = fn;

  const persistFn = useRef<T | null>(null);

  if (persistFn.current === null) {
    persistFn.current = function (this: unknown, ...args: any[]) {
      return fnRef.current.apply(this, args) as ReturnType<T>;
    } as T;
  }

  return persistFn.current;
}
