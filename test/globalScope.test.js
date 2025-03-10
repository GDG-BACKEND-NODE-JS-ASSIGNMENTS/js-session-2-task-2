const { globalVar } = require("../index");

describe("Global Scope Variable", () => {
    test("should be defined in global scope", () => {
        expect(globalVar).toBeDefined();
    });

    test("should have the correct value", () => {
        expect(globalVar).toBe("I'm a global variable");
    });
});
