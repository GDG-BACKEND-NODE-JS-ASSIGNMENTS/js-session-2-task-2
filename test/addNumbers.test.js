const { addNumbers } = require("../Assignment/index");

describe("addNumbers function", () => {
    test("should return the sum of two numbers", () => {
        expect(addNumbers(2, 3)).toBe(5);
        expect(addNumbers(10, 20)).toBe(30);
        expect(addNumbers(-5, 5)).toBe(0);
    });

    test("should return 'Invalid input' for non-numeric values", () => {
        expect(addNumbers("hello", 5)).toBe("Invalid input");
        expect(addNumbers(null, 2)).toBe("Invalid input");
        expect(addNumbers(undefined, 10)).toBe("Invalid input");
    });
});
