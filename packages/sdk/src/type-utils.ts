import type { z } from 'zod'

export type AnyZodObject = z.ZodObject<any>
export type Merge<A extends object, B extends object> = Omit<A, keyof B> & B
export type Cast<T, U> = T extends U ? T : U
export type Iof<T extends object> = { [K in keyof T]: T[K] }

export type Join<S extends (string | number | symbol)[]> = S extends [infer H, ...infer T]
  ? `${Cast<H, string>}${Join<Cast<T, string[]>>}`
  : S extends [infer H]
  ? Cast<H, string>
  : ''

export type StringEquals<A extends string, B extends string> = Readonly<A> extends Readonly<B> ? true : false
