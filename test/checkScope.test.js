const { checkScope } = require("../Assignment/index");

describe("checkScope function", () => {
    test("should contain global and local scope variables", () => {
        const result = checkScope();
        expect(result.globalVar).toBe("I'm a global variable");
        expect(result.localVar).toBe("I'm a local variable");
    });
});
