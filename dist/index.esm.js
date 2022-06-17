var isValidCPF = function (value) {
    // Validar se é String
    if (typeof value !== "string") {
        return false;
    }
    // Tirar formatação
    value = value.replace(/[^\d]+/g, "");
    // Validar se tem tamanho 11 ou se é uma sequência de digitos repetidos
    if (value.length !== 11 || !!value.match(/(\d)\1{10}/))
        return false;
    // String para Array
    var values = value.split("");
    var validator = values
        // Pegar os últimos 2 digitos de validação
        .filter(function (digit, index, array) { return index >= array.length - 2 && digit; })
        // Transformar digitos em números
        .map(function (el) { return +el; });
    var toValidate = function (pop) {
        return values
            // Pegar Array de items para validar
            .filter(function (digit, index, array) { return index < array.length - pop && digit; })
            // Transformar digitos em números
            .map(function (el) { return +el; });
    };
    var rest = function (count, pop) {
        return ((toValidate(pop)
            // Calcular Soma dos digitos e multiplicar por 10
            .reduce(function (soma, el, i) { return soma + el * (count - i); }, 0) *
            10) %
            // Pegar o resto por 11
            11) %
            // transformar de 10 para 0
            10;
    };
    if (!(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1])) {
        return true;
    }
    else {
        return false;
    }
};

export { isValidCPF };
//# sourceMappingURL=index.esm.js.map
