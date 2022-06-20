# Projeto de funções para validação de campos de formulário e distribuição via pacote NPM

## Funções JS/Typescript para validação de campos de formulário

## Comandos de instalação do pacote

**npm i validations_teste_dfa**

**yarn add validations_teste_dfa**

## Comandos para build e publish das funções

### 1) "yarn test"

Roda os arquivos do diretório test

### 2) "yarn build"

Efetua o build dos arquivos e dependências de Typescript

### 3) "yarn publish"

Publica o pacote com gerenciador de versão

O versionamento segue padrão semântico através das plavaras chaves:

- Major
- Patch
- Minor

Maiores informações em https://docs.npmjs.com/about-semantic-versioning

# Descrição das funcionalidades e semântica de importação

## isValidCPF

```
import { isValidCPF } from 'validations_teste_dfa';

/**
@param {string} value - CPF com ou sem máscara
@returns {boolean} - Se CPF conter 11 caracteres e passar no algoritmo de validação é verdadeiro
*/

isValidCPF(value: string) => boolean
```
# Leia mais sobre as dependências utilizadas no projeto

Rollup: https://rollupjs.org/guide/en/

Jest: https://jestjs.io/
