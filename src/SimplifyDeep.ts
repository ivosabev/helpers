import {type Primitive} from './Primitive.js';

// SOURCE: https://github.com/sindresorhus/type-fest/blob/main/source/simplify-deep.d.ts

type IsArrayOfUnknownLength<Array_ extends readonly unknown[]> = number extends Array_['length']
  ? '0' extends keyof Array_
    ? false
    : Array_ extends readonly [...unknown[], unknown]
      ? false
      : true
  : false;

/**
Recursively simplifies a type while including and/or excluding certain types from being simplified.

@example
```
import type {ConditionalSimplifyDeep} from 'type-fest';

type TypeA = {
	foo: {
		a: string;
	};
};

type TypeB = {
	foo: {
		b: string;
	};
};

type SimplifyDeepTypeAB = ConditionalSimplifyDeep<TypeA & TypeB, never, object>;
//=> {foo: {a: string; b: string}}
```

@example
```
import type {ConditionalSimplifyDeep} from 'type-fest';

type SomeComplexType1 = {
	a1: string;
	b1: number;
	c1: boolean;
};

type SomeComplexType2 = {
	a2: string;
	b2: number;
	c2: boolean;
};

type TypeA = {
	foo: {
		a: string;
		complexType: SomeComplexType1;
	};
};

type TypeB = {
	foo: {
		b: string;
		complexType: SomeComplexType2;
	};
};

type SimplifyDeepTypeAB = ConditionalSimplifyDeep<TypeA & TypeB, SomeComplexType1 | SomeComplexType2, object>;
//=> {
//	foo: {
// 		a: string;
// 		b: string;
// 		complexType: SomeComplexType1 & SomeComplexType2;
//	};
// }
```

@see SimplifyDeep
@category Object
*/
export type ConditionalSimplifyDeep<Type, ExcludeType = never, IncludeType = unknown> = Type extends ExcludeType
  ? Type
  : Type extends IncludeType
    ? Type extends readonly unknown[]
      ? IsArrayOfUnknownLength<Type> extends true
        ? Type extends unknown[]
          ? Array<ConditionalSimplifyDeep<Type[number], ExcludeType, IncludeType>>
          : ReadonlyArray<ConditionalSimplifyDeep<Type[number], ExcludeType, IncludeType>>
        : {[TypeKey in keyof Type]: ConditionalSimplifyDeep<Type[TypeKey], ExcludeType, IncludeType>}
      : {[TypeKey in keyof Type]: ConditionalSimplifyDeep<Type[TypeKey], ExcludeType, IncludeType>}
    : Type;

/**
Matches any primitive, `void`, `Date`, or `RegExp` value.
*/
export type BuiltIns = Primitive | void | Date | RegExp;

type ReadonlyDate = {
  readonly [Key in keyof Date as Key extends `set${string}` ? never : Key]: Date[Key];
};

type FindGlobalType<Name extends string> = Name extends string ? (typeof globalThis extends Record<Name, infer T> ? T : never) : never;

type FindGlobalInstanceType<Name extends string> = Name extends string
  ? typeof globalThis extends Record<Name, abstract new (...arguments_: any[]) => infer T>
    ? T
    : never
  : never;

// `Float16Array` is ES2025. Look it up so an ES2024 lib does not fail to compile.
type Float16ArrayOf<Buffer extends ArrayBufferLike> = {
  readonly buffer: Buffer;
  subarray(begin?: number, end?: number): Float16ArrayOf<Buffer>;
} & FindGlobalType<'Float16Array'>['prototype'];

type TypedArray<Buffer extends ArrayBufferLike = ArrayBufferLike> =
  | Int8Array<Buffer>
  | Uint8Array<Buffer>
  | Uint8ClampedArray<Buffer>
  | Int16Array<Buffer>
  | Uint16Array<Buffer>
  | Int32Array<Buffer>
  | Uint32Array<Buffer>
  | Float16ArrayOf<Buffer>
  | Float32Array<Buffer>
  | Float64Array<Buffer>
  | BigInt64Array<Buffer>
  | BigUint64Array<Buffer>;

/**
Matches types that must not be walked: built-ins, thenables, functions, typed arrays, and DOM nodes.
*/
export type NonRecursiveType =
  | BuiltIns
  | ReadonlyDate
  | (abstract new (...arguments_: any[]) => unknown)
  | ArrayBuffer
  | SharedArrayBuffer
  | DataView
  | TypedArray
  | FindGlobalInstanceType<'Node'>
  | PromiseLike<unknown>
  | Function;

type UnknownCollection =
  | readonly unknown[]
  | ReadonlyMap<unknown, unknown>
  | ReadonlySet<unknown>
  | WeakMap<WeakKey, unknown>
  | WeakSet<WeakKey>;

/**
Deeply simplifies an object type.

You can exclude certain types from being simplified by providing them in the second generic `ExcludeType`.

Useful to flatten the type output to improve type hints shown in editors.

@example
```
import type {SimplifyDeep} from 'type-fest';

type PositionX = {
	left: number;
	right: number;
};

type PositionY = {
	top: number;
	bottom: number;
};

type Properties1 = {
	height: number;
	position: PositionY;
};

type Properties2 = {
	width: number;
	position: PositionX;
};

type Properties = Properties1 & Properties2;
// In your editor, hovering over `Props` will show the following:
//
// type Properties = Properties1 & Properties2;

type SimplifyDeepProperties = SimplifyDeep<Properties1 & Properties2>;
// But if wrapped in SimplifyDeep, hovering over `SimplifyDeepProperties` will show a flattened object with all the properties:
//
// SimplifyDeepProperties = {
// 	height: number;
// 	width: number;
// 	position: {
// 		top: number;
// 		bottom: number;
// 		left: number;
// 		right: number;
// 	};
// };
```

@example
```
import type {SimplifyDeep} from 'type-fest';

// A complex type that you don't want or need to simplify
type ComplexType = {
	a: string;
	b: 'b';
	c: number;
	...
};

type PositionX = {
	left: number;
	right: number;
};

type PositionY = {
	top: number;
	bottom: number;
};

// You want to simplify all other types
type Properties1 = {
	height: number;
	position: PositionY;
	foo: ComplexType;
};

type Properties2 = {
	width: number;
	position: PositionX;
	foo: ComplexType;
};

type SimplifyDeepProperties = SimplifyDeep<Properties1 & Properties2, ComplexType>;
// If wrapped in `SimplifyDeep` and set `ComplexType` to exclude, hovering over `SimplifyDeepProperties` will
// show a flattened object with all the properties except `ComplexType`:
//
// SimplifyDeepProperties = {
// 	height: number;
// 	width: number;
// 	position: {
// 		top: number;
// 		bottom: number;
// 		left: number;
// 		right: number;
// 	};
//	foo: ComplexType;
// };
```

@see Simplify
@category Object
*/
export type SimplifyDeep<Type, ExcludeType = never> = ConditionalSimplifyDeep<
  Type,
  ExcludeType | NonRecursiveType | Exclude<UnknownCollection, readonly unknown[]>,
  object
>;
