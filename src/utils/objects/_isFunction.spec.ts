import _isFunction from "./_isFunction";

describe("_isFunction", () => {
    it("number is not function", () => {
        expect(_isFunction(2)).toBe(false);
    })
    it("string is not function", () => {
        expect(_isFunction("2")).toBe(false);
    })
    it("function is function", () => {
        expect(_isFunction(() => 2)).toBe(true);
    })
    it("object is not function", () => {
        expect(_isFunction({})).toBe(false);
    })
})