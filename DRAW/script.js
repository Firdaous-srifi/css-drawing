document.addEventListener("DOMContentLoaded", function () {
    fetch("trucks.json")
        .then(response => response.json())
        .then(data => {
            let truckSelect = document.getElementById("truckModel");
            data.models.forEach(model => {
                let option = document.createElement("option");
                option.value = model.price;
                option.textContent = model.name;
                truckSelect.appendChild(option);
            });
        });

    document.getElementById("simulationForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let truckPrice = parseFloat(document.getElementById("truckModel").value);
        let extraRange = parseFloat(document.getElementById("extraRange").value) || 0;
        let extraOptions = parseFloat(document.getElementById("extraOptions").value) || 0;
        let subsidy = parseFloat(document.getElementById("subsidy").value) || 0;
        
        let totalCost = truckPrice + extraRange + extraOptions - subsidy;
        //**subsody huma subvention d'etats */
        document.getElementById("totalCost").textContent = `Coût total : ${totalCost} MAD`;
        document.getElementById("resultSection").style.display = "block";
    });
});