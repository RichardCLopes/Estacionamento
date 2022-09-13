class Estacionamento {
  relatorio = [];
  identificador = 121;
  atual_est = new Array();
  vagas = 1;
  saldo_total = 0;

  estacionar() {
    if (this.vagas <= 20) {
      var e_hr_ent = document.getElementById("hrentrada").value;
      var e_veiculo = document.getElementById("veiculo").value;
      var e_placa = document.getElementById("placa").value;
      var e_cor = document.getElementById("cor").value;
      var e_prop = document.getElementById("prop").value;
      var e_tipo = document.querySelector('input[name="tipo"]:checked').value;

      if (e_tipo == "carro") {
        var obje = new Carro(
          this.identificador,
          e_placa,
          e_veiculo,
          e_cor,
          e_prop
        );
        this.atual_est.unshift(obje);
      } else {
        var obje = new Moto(
          this.identificador,
          e_placa,
          e_veiculo,
          e_cor,
          e_prop
        );
        this.atual_est.unshift(obje);
      }

      var tabela = document.getElementById("att");
      var linha = tabela.insertRow(1);
      var cel1 = linha.insertCell(0);
      var cel2 = linha.insertCell(1);
      var cel3 = linha.insertCell(2);
      var cel4 = linha.insertCell(3);
      var cel5 = linha.insertCell(4);
      var cel6 = linha.insertCell(5);
      var cel7 = linha.insertCell(6);
      var cel8 = linha.insertCell(7);

      cel1.innerHTML = this.vagas;
      cel2.innerHTML = this.identificador;
      cel3.innerHTML = e_veiculo;
      cel4.innerHTML = e_placa;
      cel5.innerHTML = e_tipo;
      cel6.innerHTML = e_cor;
      cel7.innerHTML = e_prop;
      cel8.innerHTML = e_hr_ent;

      var container = document.getElementById("dados");
      container.style.display = "none";
      document.getElementById("form").reset();
      this.identificador += 11;
      this.vagas++;
    } else {
      var container = document.getElementById("dados");
      container.style.display = "none";
      document.getElementById("form").reset();
      window.alert("Estacionamento Lotado");
    }
  }

  liberar() {
    var e_hr_sai = document.getElementById("hrsai").value;
    var e_placasai = document.getElementById("placasai").value;
    var tabela = document.getElementById("att");

    for (let i = 0; i < this.atual_est.length; i++) {
      if (e_placasai == this.atual_est[i].placa) {
        var valor = this.atual_est[i].calcularValorPago(
          tabela.rows[i + 1].cells[7].innerHTML,
          e_hr_sai
        );
        var dados_rel = [
          this.atual_est[i].id,
          this.atual_est[i].placa,
          tabela.rows[i + 1].cells[4].innerHTML,
          tabela.rows[i + 1].cells[7].innerHTML,
          e_hr_sai,
          "R$" + valor + ",00",
        ];
        this.relatorio.unshift(dados_rel);
        this.atual_est.splice(i, 1);
        tabela.deleteRow(i + 1);
      }
    }

    this.saldo_total += valor;
    document.getElementById("saldo").innerHTML = "R$" + this.saldo_total + ",00";
    document.getElementById("valor").innerHTML = "R$" + valor + ",00";
    var container = document.getElementById("preco");
    container.style.display = "block";
    var container = document.getElementById("dados_saida");
    container.style.display = "none";
    document.getElementById("form2").reset();
  }

  gerarRelatorio() {
    var container = document.getElementById("relatorio");
    if (container.style.display === "block") {
      container.style.display = "none";
    } else {
      container.style.display = "block";
    }

    var table = document.getElementById("rel");
    for (var i = table.rows.length - 1; i > 0; i--) {
      table.deleteRow(i);
    }

    for (let i = 0; i < this.relatorio.length; i++) {
      var tabela = document.getElementById("rel");
      var linha = tabela.insertRow(1);
      var cel1 = linha.insertCell(0);
      var cel2 = linha.insertCell(1);
      var cel3 = linha.insertCell(2);
      var cel4 = linha.insertCell(3);
      var cel5 = linha.insertCell(4);
      var cel6 = linha.insertCell(5);
      var elemento = this.relatorio[i];
      cel1.innerHTML = elemento[0];
      cel2.innerHTML = elemento[1];
      cel3.innerHTML = elemento[2];
      cel4.innerHTML = elemento[3];
      cel5.innerHTML = elemento[4];
      cel6.innerHTML = elemento[5];
    }

    for (let i = 0; i < this.atual_est.length; i++) {
      var tabela = document.getElementById("rel");
      var tabela2 = document.getElementById("att");
      var linha = tabela.insertRow(1);
      var cel1 = linha.insertCell(0);
      var cel2 = linha.insertCell(1);
      var cel3 = linha.insertCell(2);
      var cel4 = linha.insertCell(3);
      var cel5 = linha.insertCell(4);
      var cel6 = linha.insertCell(5);
      cel1.innerHTML = tabela2.rows[i + 1].cells[1].innerHTML;
      cel2.innerHTML = tabela2.rows[i + 1].cells[3].innerHTML;
      cel3.innerHTML = tabela2.rows[i + 1].cells[4].innerHTML;
      cel4.innerHTML = tabela2.rows[i + 1].cells[7].innerHTML;
      cel5.innerHTML = "Estacionado";
      cel6.innerHTML = "Em Aberto";
    }
  }

  getSaldo() {
    var container = document.getElementById("saldo_est");

    if (container.style.display === "block") {
      container.style.display = "none";
    } else {
      container.style.display = "block";
    }
  }

  onoffEstacionar() {
    var container = document.getElementById("dados");

    if (container.style.display === "block") {
      container.style.display = "none";
    } else {
      container.style.display = "block";
    }
  }

  onoffLiberar() {
    var container = document.getElementById("dados_saida");

    if (container.style.display === "block") {
      container.style.display = "none";
    } else {
      container.style.display = "block";
    }
  }

  fecharRelatorio() {
    var container = document.getElementById("relatorio");
    container.style.display = "none";
    var table = document.getElementById("rel");

    for (var i = table.rows.length - 1; i > 0; i--) {
      table.deleteRow(i);
    }
  }

  pago() {
    var container = document.getElementById("preco");
    container.style.display = "none";
  }
}

estac = new Estacionamento();
