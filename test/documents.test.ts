import { isValidCPF } from "../src/files/documents";

describe("Test isValidCPF arguments", () => {
  test("CPF válido sem máscara", () => {
    const value = isValidCPF("51864634006");
    expect(value).toBeTruthy();
  });

  test("CPF válido com máscara", () => {
    const value = isValidCPF("518.646.340-06");
    expect(value).toBeTruthy();
  });

  test("CPF com caracteres idênticos", () => {
    const value0 = isValidCPF("00000000000");
    const value1 = isValidCPF("11111111111");
    const value2 = isValidCPF("22222222222");
    const value3 = isValidCPF("33333333333");
    const value4 = isValidCPF("44444444444");
    const value5 = isValidCPF("55555555555");
    const value6 = isValidCPF("66666666666");
    const value7 = isValidCPF("77777777777");
    const value8 = isValidCPF("88888888888");
    const value9 = isValidCPF("99999999999");
    expect(
      value0 &&
        value1 &&
        value2 &&
        value3 &&
        value4 &&
        value5 &&
        value6 &&
        value7 &&
        value7 &&
        value8 &&
        value9
    ).toBeFalsy();
  });

  test("CPF não aceito na validação", ()=> {
    const value = isValidCPF("518.645.340-06");
    expect(value).toBeFalsy();
  })
});
