import _zip from "./_zip";

describe("_zip", () => {
    it("zip two arrays together", () => {
        expect(_zip([23, 45, 67], ['a', 'c', 'v']))
            .toEqual(
                [[23, 'a'], [45, 'c'], [67, 'v']]
            )
    })
})