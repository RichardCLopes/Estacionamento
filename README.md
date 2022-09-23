# Estacionamento
Sistema de estacionamento web.

Sistema para gerenciar um estacionamento. O sistema possui as seguintes classes:

- Estacionamento(numeroDeVagas=20);
  1. estacionar(veículo, horaEntrada);
  2. liberar(idVeículo, horaSaída);
  3. gerarRelatório();
  4. getSaldo();
  5. Veiculo(id, placa, marca, cor, nomeDoProprietário)

- Moto(id, placa, marca, cor, nomeDoProprietário)
  1. calcularValorPago(horaEntrada, horaSaida);
  2. toString
 
- Carro(id, placa numero_portas, marca, cor, nomeDoProprietário)
  1. calcularValorPago(horaEntrada, horaSaida);
  2. toString

O método gerarRelatório apresenta a hora de entrada e saída de todos os veículos que já passaram pelo estacionamento, incluindo os que estão estacionados.

Tabela de preços:
  - Moto: até 30min - grátis;  1h - R$ 2,00; mais de 4h - R$ 10
  - Carro: até 15 - grátis; 1h - R$ 4,00; mais de 4h - R$ 20,0

getSaldo retorna o saldo atual do estacionamento.
