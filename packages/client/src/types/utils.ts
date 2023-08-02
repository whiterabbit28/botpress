export type Cast<T, U> = T extends U ? T : U

export type Join<S extends (string | number | symbol)[]> = S extends [infer H, ...infer T]
  ? `${Cast<H, string>}${Join<Cast<T, string[]>>}`
  : S extends [infer Last]
  ? Cast<Last, string>
  : ''

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never

export type MethodsOf<T extends object> = {
  [K in keyof T as T[K] extends (...args: any[]) => any ? K : never]: T[K]
}
