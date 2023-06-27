import { add } from "./add";

describe("add", () => {
  test("2 + 3", () => {
    expect(add(2, 3)).toBe(5);
  });
});
