// version
export const VERSION = '0.1.0';

// The largest integer that can be represented exactly.
export const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

// Exclude Extract NonNullable ReturnType InstanceType
export type Exclusive<T, U> = (T extends U ? never : T) | (U extends T ? never : U);
// type b = Exclusive<1 | 2 | 3, 2 | 3 | 4> // 1| 4

// Option
interface Option<T> {
    flat<U>(f: (val: T) => None): None
    flat<U>(f: (val: T) => Option<U>): Option<U>
    getval(val: T): T
}
class None implements Option<never> {
    flat(): None {
        return this;
    }
    getval<U>(val: U): U {
        return val;
    }
}
class Some<T> implements Option<T> {
    constructor(private val: T){};
    flat<U>(f: (val: T) => None): None
    flat<U>(f: (val: T) => Some<U>): Some<U>
    flat<U>(f: (val: T) => Option<U>): Option<U> {
        return f(this.val);
    }
    getval(): T {
        return this.val;
    }
}
function Option<T>(val: null | undefined): None
function Option<T>(val: T): Some<T>
function Option<T>(val: T): Option<T> {
    if(val == null) return new None;
    return new Some(val);
}
// test
// let res = Option(6).flat(n => Option(n*2)).flat(n => new None).getval(8);
