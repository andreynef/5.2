export function pickFromSyntheticEvent<T extends HTMLElement>() {//хз с большой буквы. Просто есть эта ф. Она забирает атрибут евента.
  return <K extends keyof T>(key: K) =>
    <E extends ((t: T[K]) => void)>(fn: E) =>
      (e: React.SyntheticEvent<T>) =>
        fn(e.currentTarget[key]);
}