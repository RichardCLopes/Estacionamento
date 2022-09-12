class Veiculo {
  constructor(id, placa, marca, cor, nomeproprietario) {
    this._id = id;
    this._placa = placa;
    this._marca = marca;
    this._cor = cor;
    this._nomeproprietario = nomeproprietario;
  }

  calcularValorPago(horaEntrada, horaSaida) {
    return 0;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get placa() {
    return this._placa;
  }

  set placa(placa) {
    this._placa = placa;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }

  get cor() {
    return this._cor;
  }

  set cor(cor) {
    this._cor = cor;
  }

  get nomeproprietario() {
    return this._nomeproprietario;
  }

  set nomeproprietario(nomeproprietario) {
    this._nomeproprietario = nomeproprietario;
  }
}
