document.addEventListener("DOMContentLoaded", function () {
    fetch("electricar.json")
        .then(response => response.json())
        .then(data => {
            let carSelect = document.getElementById("carModel");
            data.models.forEach(model => {
                let option = document.createElement("option");
                option.value = model.basePrice;
                option.textContent = model.name;
                carSelect.appendChild(option);
            });
        });

    document.getElementById("simulationForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let carbasePrice = parseFloat(document.getElementById("carModel").value);
        let extraRange = parseFloat(document.getElementById("extraRange").value) || 0;
        let extraOptions = parseFloat(document.getElementById("extraOptions").value) || 0;
        let subvention = parseFloat(document.getElementById("subvention").value) || 0;
        
        let totalCost = carbasePrice + extraRange + extraOptions - subvention;
        //**subsody huma subvention d'etats */
        document.getElementById("totalCost").textContent = `Coût total (achat standard) : ${totalCost} MAD`;
        document.getElementById("resultSection").style.display = "block";
    });
});