import _isNumber from "./_isNumber";

describe("isNumber", () => {
    it("2 is number", () => {
        expect(_isNumber(2)).toBe(true);
    })
    it("`a` is not number", () => {
        expect(_isNumber('a')).toBe(false);
    })
})
