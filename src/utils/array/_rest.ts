// 返回数组中除了第一个元素外的其他全部元素。传递 index 参数将返回从 index 开始的剩余所有元素 。
export default function _rest(arr: any[], index: number = 1): any[] {
    return arr.slice(index);
}
