import { Terminal } from "../src/Terminal";

describe("Terminal", () => {
  it("returns the terminal width", () => {
    expect(typeof Terminal.width()).toBe("number");
  });

  it("returns the terminal height", () => {
    expect(typeof Terminal.height()).toBe("number");
  });
});
