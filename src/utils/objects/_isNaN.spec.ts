import _isNaN from "./_isNaN";

describe("_isNaN", () => {
    it("`NaN` is not NaN",() => {
        expect(_isNaN(`NaN`)).toBe(false)
    })
    it("NaN is NaN",() => {
        expect(_isNaN(NaN)).toBe(true)
    })
    it("2 is not NaN",() => {
        expect(_isNaN(2)).toBe(false)
    })
    it("`s` is not NaN",() => {
        expect(_isNaN(`s`)).toBe(false)
    })
})

