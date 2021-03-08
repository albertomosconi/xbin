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

function complemento2(numero) {
  var soluzione = "0";
  var vera_soluzione = "";

  if (numero >= 0) {
    vera_soluzione = "0" + codificaNaturale(numero);
  } else {
    soluzione = "0" + codificaNaturale(-1 * numero);

    var ribalta = false;
    for (let bit of soluzione.split("").reverse().join("")) {
      if (ribalta == false) {
        vera_soluzione = bit + vera_soluzione;
        if (bit == "1") ribalta = true;
      } else {
        if (bit == "1") vera_soluzione = "0" + vera_soluzione;
        else vera_soluzione = "1" + vera_soluzione;
      }
    }
  }

  return vera_soluzione;
}

function randomInRange(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

function toggleEs(es) {
  var es_div = document.getElementById(es);
  es_div.classList.toggle("hide");
}

function generaES1() {
  var es1_num = document.getElementById("es1-num");
  var cn = document.getElementById("es1-cn");
  var ms = document.getElementById("es1-ms");
  var c2 = document.getElementById("es1-c2");

  cn.value = "";
  ms.value = "";
  c2.value = "";

  es1_num.innerText = randomInRange(600, -600);
}

function checkES1() {
  var es1_num = document.getElementById("es1-num");
  var cn = document.getElementById("es1-cn");
  var ms = document.getElementById("es1-ms");
  var c2 = document.getElementById("es1-c2");

  if (
    cn.value === codificaNaturale(parseInt(es1_num.innerText)) &&
    ms.value === moduloSegno(parseInt(es1_num.innerText)) &&
    c2.value === complemento2(parseInt(es1_num.innerText))
  ) {
    alert("bindi");
  } else {
    alert("UBUNTU!");
  }
}

function generaES2() {
  var es2_num = document.getElementById("es2-num");

  es2_num.innerText = codificaNaturale(randomInRange(1023, 0));
}

function checkES2() {
  var es2_num = document.getElementById("es2-num");
  var cn = document.getElementById("es2-cn");
  var ms = document.getElementById("es2-ms");
  var c2 = document.getElementById("es2-c2");

  alert("cosa vuoi");
}

var es1_btn_gen = document.getElementById("es1-gen");
es1_btn_gen.addEventListener("click", generaES1);

var es1_btn_check = document.getElementById("es1-check");
es1_btn_check.addEventListener("click", checkES1);

var es1_title = document.getElementById("es1-title");
es1_title.addEventListener("click", () => toggleEs("es1"));

var es2_title = document.getElementById("es2-title");
es2_title.addEventListener("click", () => toggleEs("es2"));

var es2_btn_gen = document.getElementById("es2-gen");
es2_btn_gen.addEventListener("click", generaES2);

var es2_btn_check = document.getElementById("es2-check");
es2_btn_check.addEventListener("click", checkES2);
