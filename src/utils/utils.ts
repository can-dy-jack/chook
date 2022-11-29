import _isFunction from "./objects/_isFunction";
import _isNaN from "./objects/_isNaN";
import _rest from "./array/_rest";

// aliases
const _tail = _rest, _drop = _rest;

const helper = {
    _isFunction,
    _isNaN,
    _rest,
    _tail,
    _drop
}

export default helper;