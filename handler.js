export class ErrorHandler {
  constructor() {

  }

  #objectInvalid(obj) {
    if (!obj || typeof obj !== 'object') {
      throw new Error('Entrada inválida, você deve passar um objeto');
    }

    return
  }

  objectValidation(obj) {
    this.#objectInvalid(obj);
  }

  #invalidArray(arr) {
    if (!arr || !Array.isArray(arr)) {
      throw new Error('Entrada inválida, você deve passar um array de objetos');
    }

    return
  }

  arrayValidation(arr) {
    this.#invalidArray(arr);
  }

  #invalidId(id, idTester) {
    if (typeof id !== typeof idTester) {
      throw new Error('ID com tipagem inválida');
    }

    return
  }

  idValidation(id, idTester) {
    this.#invalidId(id, idTester);
  }
}