let select = document.getElementById("select");
let calc = document.getElementById("calc");
let res = document.getElementById("res");
let res2 = document.getElementById("res2");
let section = document.getElementById("section");
let icon = document.getElementById("icon");
let list = document.querySelector(".list");
icon.onclick = function () {
  list.classList.toggle("block");
};
fetch("dropdrone.json")
  .then((res) => res.json())
  .then((data) => {
    for (let [key, value] of Object.entries(data.tarifs.standard.distance)) {
      let option = document.createElement("option");
      option.textContent = key;
      option.value = key;
      select.appendChild(option);
    }
    let base = data.tarifs.standard.base;
    let poid = data.tarifs.standard.poids;
    let dimension = data.tarifs.standard.dimension;
    let base2 = data.tarifs.express.base;
    let poids2 = data.tarifs.express.poids;
    let dimension2 = data.tarifs.express.dimension;
    calc.addEventListener("click", () => {
      let poids = document.getElementById("Poids").value;
      let largeur = document.getElementById("Largeur").value;
      let longueur = document.getElementById("Longueur").value;
      let hauteur = document.getElementById("Hauteur").value;
      if (poid <= 0 || largeur <= 0 || longueur <= 0 || hauteur <= 0) {
        alert("you cant print a negative valeu");
      } else {
        res.textContent =
          base +
          parseFloat(poids) * poid +
          (parseFloat(largeur) + parseFloat(hauteur) + parseFloat(longueur)) *
            dimension +
          data.tarifs.standard.distance[select.value];
        res2.textContent =
          base2 +
          parseFloat(poids) * poids2 +
          (parseFloat(largeur) + parseFloat(hauteur) + parseFloat(longueur)) *
            dimension2 +
          data.tarifs.express.distance[select.value];
        section.style.display = "block";
      }
    });
  });