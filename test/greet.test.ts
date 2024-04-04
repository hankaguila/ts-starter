import { beforeAll, afterAll, describe, it, vi, expect } from "vitest";
import greet from "../src/lib/greet.js";

beforeAll(() => {
  vi.spyOn(console, "log");
});

afterAll(() => {
  vi.restoreAllMocks();
});

describe("greet works", () => {

  it("says 'Hi!'", () => {
    greet();
    expect(console.log).toBeCalledWith("Hi!");
  });
});
