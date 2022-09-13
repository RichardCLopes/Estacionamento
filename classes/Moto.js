class Moto extends Veiculo {
  constructor(id, placa, marca, cor, nomeproprietario) {
    super(id, placa, marca, cor, nomeproprietario);
  }

  calcularValorPago(horaEntrada, horaSaida) {
    var hr_e = String(horaEntrada);
    var hr_s = String(horaSaida);
    var hrent = hr_e.slice(0, 2);
    var minent = hr_e.slice(-2);
    var hrsai = hr_s.slice(0, 2);
    var minsai = hr_s.slice(-2);
    var ent_min = parseInt(hrent, 10) * 60 + parseInt(minent, 10);
    var sai_min = parseInt(hrsai, 10) * 60 + parseInt(minsai, 10);
    var res = sai_min - ent_min;
    if (res <= 30) {
      return 0;
    } else if (res > 30 && res <= 240) {
      if (res < 60) {
        return 2;
      }
      var horas = res / 60;
      return 2 * parseInt(horas, 10);
    } else {
      return 10;
    }
  }
}
