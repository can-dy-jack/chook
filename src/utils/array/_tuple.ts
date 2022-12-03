export default function _tuple<T extends unknown[]>(...ts: T): T {
    return ts;
}