const { greet } = require("../Assignment/index");

describe("greet function", () => {
    test("should return the correct greeting message", () => {
        expect(greet()).toBe("Hello, welcome to JavaScript!");
    });
});
