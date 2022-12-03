import _rest from "./_rest";

describe("_rest", () => {
    it("get array's items except the first one", () => {
        expect(_rest([1,2,3,4])).toEqual([2,3,4])
    })
    it("get array's items except your point items", () => {
        expect(_rest([1,2,3,4], 2)).toEqual([3,4])
    })
})