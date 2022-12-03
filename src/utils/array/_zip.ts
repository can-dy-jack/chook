import _tuple from "./_tuple";

export default function _zip<T, U>(
    arr: T[], arr2: U[]
): [T, U][] {
    return arr.map((v, k) => _tuple(v, arr2[k]))
}