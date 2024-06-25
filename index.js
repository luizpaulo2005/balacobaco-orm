class ORM {
  #lista;

  constructor() {
    if (this.constructor === ORM) {
      throw new Error("Objeto ORM não pode ser instânciado");
    }
    this.#lista = [];
  }

  #createItem(item) {
    const qtd = this.#lista.length;
    if (item != undefined || item != null) {
      if (qtd == 0) {
        this.#lista.push({
          id: 0,
          ...item,
        });
      } else {
        this.#lista.push({
          id: this.#lista[qtd - 1].id + 1,
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
    items.forEach(element => {
      this.#createItem(element);
    });
    return "Itens adicionados";
  }

  createMany(items) {
    return this.#createManyItems(items);
  }

  #selecionarTodos() {
    if (this.#lista.length == 0) {
      return `Lista de ${this.constructor.name}(s) vazia`;
    }

    return this.#lista.map((item) => {
      return JSON.stringify(item);
    });
  }

  get selectAll() {
    return this.#selecionarTodos();
  }

  #selecionarUnico(id) {
    if (!this.#lista.find((item) => item.id == id)) {
      return `Item ${id} não encontrado`;
    }

    return this.#lista.find((item) => item.id == id);
  }

  selectUnique(id) {
    return this.#selecionarUnico(id);
  }

  #atualizar(id, item) {
    const obj = this.#lista.find((item) => item.id == id);
    if (!obj) {
      return `Item ${id} não encontrado`;
    }

    const index = this.#lista.indexOf(obj);

    this.#lista[index] = {
      id,
      ...item,
    };
    return `Item ${id} atualizado`;
  }

  update(id, item) {
    return this.#atualizar(id, item);
  }

  #apagar(id) {
    const item = this.#lista.find((item) => item.id == id);
    if (!item) {
      return `Item ${id} não encontrado`;
    }
    const index = this.#lista.indexOf(item);
    this.#lista.splice(index, 1);

    return `Item ${id} excluído`;
  }

  delete(id) {
    return this.#apagar(id);
  }
}

export { ORM };
