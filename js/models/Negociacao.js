class Negociacao {
  constructor(data, quantidade, valor) {
    this._data = data; // _ -> para que no se pueda accesar fuera de la clase
    this._quantidade = quantidade;
    this._valor = valor;
  }

  get Data() {
    return this._data;
  }

  get Quantidade() {
    return this._quantidade;
  }

  get Valor() {
    return this._valor;
  }

  get Volumen() {
    return this._quantidade * this._valor;
  }
}
