import { expect, test } from "bun:test";
import { Shana } from "./shana.ts";

test("should greet with 🍎➕🍯", () => {
  expect(new Shana().tova()).toBe("🍎 ➕ 🍯");
});
