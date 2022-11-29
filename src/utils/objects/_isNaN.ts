import _isNumber from "./_isNumber";

export default function _isNaN(num: any):boolean {
    if(_isNumber(num)) {
        return num !== num;
    } else {
        // 不是数字，不转换为 Number 类型，直接返回 false ，与 Number.isNaN() 类似
        return false;
    }
}