import { ErrorHandler } from "./handler.js";

class ORM {
  #list;
  #validateArgument = new ErrorHandler();

  constructor() {
    if (this.constructor === ORM) {
      throw new Error("Objeto ORM não pode ser instânciado");
    }
    this.#list = [];
  }

  #createItem(item) {
    this.#validateArgument.objectValidation(item);
    const qtd = this.#list.length;
    if (item != undefined || item != null) {
      if (qtd == 0) {
        this.#list.push({
          id: 0,
          ...item,
        });
      } else {
        this.#list.push({
          id: this.#list[qtd - 1].id + 1,
          ...item,
        });
      }
      return "Item adicionado";
    }
  }

  create(item) {
    return this.#createItem(item);
  }

  #createManyItems(items) {
    this.#validateArgument.arrayValidation(items);
    items.forEach(element => {
      this.#createItem(element);
    });
    return "Itens adicionados";
  }

  createMany(items) {
    return this.#createManyItems(items);
  }

  #selectMany() {
    if (this.#list.length == 0) {
      return `list de ${this.constructor.name}(s) vazia`;
    }

    return this.#list.map((item) => {
      return JSON.stringify(item);
    });
  }

  get selectAll() {
    return this.#selectMany();
  }

  #selectUnique(id) {
    this.#validateArgument.idValidation(id, this.#list[0].id);
    if (!this.#list.find((item) => item.id == id)) {
      return `Item ${id} não encontrado`;
    }

    return this.#list.find((item) => item.id == id);
  }

  selectUnique(id) {
    return this.#selectUnique(id);
  }

  #updateUnique(id, item) {
    this.#validateArgument.idValidation(id, this.#list[0].id);
    this.#validateArgument.objectValidation(item);
    const obj = this.#list.find((item) => item.id == id);
    if (!obj) {
      return `Item ${id} não encontrado`;
    }

    const index = this.#list.indexOf(obj);

    this.#list[index] = {
      id,
      ...item,
    };
    return `Item ${id} atualizado`;
  }

  update(id, item) {
    return this.#updateUnique(id, item);
  }

  #deleteUnique(id) {
    this.#validateArgument.idValidation(id, this.#list[0].id);
    const item = this.#list.find((item) => item.id == id);
    if (!item) {
      return `Item ${id} não encontrado`;
    }
    const index = this.#list.indexOf(item);
    this.#list.splice(index, 1);

    return `Item ${id} excluído`;
  }

  delete(id) {
    return this.#deleteUnique(id);
  }
}

export { ORM };
