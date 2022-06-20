import  { isValidCPF } from "../src/files/documents";

describe("Test isValidCPF arguments", () => {
  test("", () => {
    const value = isValidCPF("51864634006");
    expect(value).toBeTruthy();
  });
});
