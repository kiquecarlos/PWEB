function toUpper() {
  document.getElementById("minuscula").checked = false;
  const checkBoxMaiusculo = document.getElementById("maiuscula");

  if (checkBoxMaiusculo.checked == true) {
    const texto = document.getElementById("texto");
    texto.value = String(texto.value).toUpperCase();
  }
}

function toLower() {
  document.getElementById("maiuscula").checked = false;
  const checkBoxMinusculo = document.getElementById("minuscula");

  if (checkBoxMinusculo.checked == true) {
    const texto = document.getElementById("texto");
    texto.value = String(texto.value).toLowerCase();
  }
}
