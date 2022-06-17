export function isValidCPF(value: string) {
  // Validar se é String
  if (typeof value !== "string") {
    return false;
  }

  // Tirar formatação
  value = value.replace(/[^\d]+/g, "");

  // Validar se tem tamanho 11 ou se é uma sequência de digitos repetidos
  if (value.length !== 11 || !!value.match(/(\d)\1{10}/)) return false;

  // String para Array
  const values = value.split("");

  const validator = values
    // Pegar os últimos 2 digitos de validação
    .filter((digit, index, array) => index >= array.length - 2 && digit)
    // Transformar digitos em números
    .map((el) => +el);

  const toValidate = (pop: number) =>
    values
      // Pegar Array de items para validar
      .filter((digit, index, array) => index < array.length - pop && digit)
      // Transformar digitos em números
      .map((el) => +el);

  const rest = (count: number, pop: number) =>
    ((toValidate(pop)
      // Calcular Soma dos digitos e multiplicar por 10
      .reduce((soma, el, i) => soma + el * (count - i), 0) *
      10) %
      // Pegar o resto por 11
      11) %
    // transformar de 10 para 0
    10;

  if (!(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1])) {
    return true;
  }
}
