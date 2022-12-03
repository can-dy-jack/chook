import _isFunction from "./objects/_isFunction";
import _isNaN from "./objects/_isNaN";
import _rest from "./array/_rest";
import _tuple from "./array/_tuple";
import _zip from "./array/_zip";

// aliases
const _tail = _rest, _drop = _rest;

const helper = {
    _isFunction,
    _isNaN,
    _rest,
    _tail,
    _drop,
    _tuple,
    _zip
}

export default helper;