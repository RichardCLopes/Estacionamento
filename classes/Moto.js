class Moto extends Veiculo {
  constructor(id, placa, marca, cor, nomeproprietario) {
    super(id, placa, marca, cor, nomeproprietario);
  }

  calcularValorPago(horaEntrada, horaSaida) {
    return 2;
  }
}
