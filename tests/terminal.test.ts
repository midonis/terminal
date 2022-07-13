import { Terminal } from "../src/Terminal";

describe("Terminal", () => {
  it("can be instantiated without throwing errors", () => {
    expect(() => new Terminal()).not.toThrow(TypeError);
  });
});
