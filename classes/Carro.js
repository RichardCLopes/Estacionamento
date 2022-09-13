class Carro extends Veiculo {
  constructor(id, placa, marca, cor, nomeproprietario) {
    super(id, placa, marca, cor, nomeproprietario);
  }

  calcularValorPago(horaEntrada, horaSaida) {
    let hr_e = String(horaEntrada);
    let hr_s = String(horaSaida);
    let hrent = hr_e.slice(0, 2);
    let minent = hr_e.slice(-2);
    let hrsai = hr_s.slice(0, 2);
    let minsai = hr_s.slice(-2);
    let ent_min = parseInt(hrent, 10) * 60 + parseInt(minent, 10);
    let sai_min = parseInt(hrsai, 10) * 60 + parseInt(minsai, 10);
    let res = sai_min - ent_min;
    if(res<=15){
      return 0;
    }else if(res>15 && res<=240){
      return 4;
    }else{
      return 20;
    }
  }

}
