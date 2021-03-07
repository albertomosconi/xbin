function generaES1() {
  var es1 = document.getElementById("es1");
  var cn = document.getElementById("es1-cn");
  var ms = document.getElementById("es1-ms");

  cn.value = "";
  ms.value = "";

  es1.innerText = Math.floor(Math.random() * 200 - 100);
}

function checkES1() {
  var es1 = document.getElementById("es1");
  var cn = document.getElementById("es1-cn");
  var ms = document.getElementById("es1-ms");

  if (
    cn.value === codificaNaturale(parseInt(es1.innerText)) &&
    ms.value === moduloSegno(parseInt(es1.innerText))
  ) {
    alert("bindi");
  } else {
    alert("UBUNTU!");
  }
}

function codificaNaturale(numero) {
  var soluzione = "";

  while (numero > 0) {
    soluzione = (numero % 2).toString() + soluzione;
    numero = Math.floor(numero / 2);
  }

  if (soluzione == "") {
    if (numero == 0) return "0";
    else return "";
  } else return soluzione;
}

function moduloSegno(numero) {
  var soluzione = "";
  if (numero < 0) {
    soluzione = "1";
    numero = -1 * numero;
  } else soluzione = "0";

  soluzione = soluzione + codificaNaturale(numero);
  return soluzione;
}

var es1_btn_gen = document.getElementById("es1-gen");
es1_btn_gen.addEventListener("click", generaES1);

var es1_btn_check = document.getElementById("es1-check");
es1_btn_check.addEventListener("click", checkES1);
