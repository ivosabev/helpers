import {type Primitive} from './Primitive.js';

// SOURCE: https://github.com/sindresorhus/type-fest/blob/main/source/simplify.d.ts
/**
Useful to flatten the type output to improve type hints shown in editors. And also to transform an interface into a type to aide with assignability.

@example
```
import type {Simplify} from 'type-fest';

type PositionProps = {
	top: number;
	left: number;
};

type SizeProps = {
	width: number;
	height: number;
};

// In your editor, hovering over `Props` will show a flattened object with all the properties.
type Props = Simplify<PositionProps & SizeProps>;
```

Sometimes it is desired to pass a value as a function argument that has a different type. At first inspection it may seem assignable, and then you discover it is not because the `value`'s type definition was defined as an interface. In the following example, `fn` requires an argument of type `Record<string, unknown>`. If the value is defined as a literal, then it is assignable. And if the `value` is defined as type using the `Simplify` utility the value is assignable.  But if the `value` is defined as an interface, it is not assignable because the interface is not sealed and elsewhere a non-string property could be added to the interface.

If the type definition must be an interface (perhaps it was defined in a third-party npm package), then the `value` can be defined as `const value: Simplify<SomeInterface> = ...`. Then `value` will be assignable to the `fn` argument.  Or the `value` can be cast as `Simplify<SomeInterface>` if you can't re-declare the `value`.

@example
```
import type {Simplify} from 'type-fest';

interface SomeInterface {
	foo: number;
	bar?: string;
	baz: number | undefined;
}

type SomeType = {
	foo: number;
	bar?: string;
	baz: number | undefined;
};

const literal = {foo: 123, bar: 'hello', baz: 456};
const someType: SomeType = literal;
const someInterface: SomeInterface = literal;

function fn(object: Record<string, unknown>): void {}

fn(literal); // Good: literal object type is sealed
fn(someType); // Good: type is sealed
fn(someInterface); // Error: Index signature for type 'string' is missing in type 'someInterface'. Because `interface` can be re-opened
fn(someInterface as Simplify<SomeInterface>); // Good: transform an `interface` into a `type`
```

Only the top level is flattened. Property values are kept as is, and so are the elements of an array or a tuple, which keeps its shape. Use {@link SimplifyDeep} to flatten them too.

A function or a class constructor is returned as is, because its call and construct signatures cannot be flattened into an object. To get only the properties of a function, use `Simplify<Omit<Type, never>>`.

A primitive is also returned as is. A branded primitive like `string & {brand: 'UserId'}` is returned as is too, because flattening it would turn it into an object and remove the primitive. A union that includes a function, a class constructor, or a branded primitive is returned as is, so its other members are not flattened. A plain primitive in a union does not stop its other members from being flattened.

@link https://github.com/microsoft/TypeScript/issues/15300
@see SimplifyDeep
@category Object
*/
// The check is not distributive, so that a generic `T` stays assignable to `Simplify<T>`.
export type Simplify<T> = [
  BrandedPrimitive<T> | Extract<T, ((...arguments_: never) => unknown) | (abstract new (...arguments_: never) => unknown)>,
] extends [never]
  ? {[KeyType in keyof T]: T[KeyType]} & {}
  : T;

// A primitive intersected with an object, like `string & {brand: 'UserId'}`. Flattening it would drop the primitive.
type BrandedPrimitive<Type> = Type extends Primitive ? ({[KeyType in keyof Type]: Type[KeyType]} extends Primitive ? never : Type) : never;
