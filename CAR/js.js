document.addEventListener('DOMContentLoaded', () => {
    const busModelSelect = document.getElementById('bus-model');
    const busForm = document.getElementById('bus-form');
    const resultSection = document.getElementById('result-section');
    const totalCostSpan = document.getElementById('total-cost');

    // Chargement des modèles de bus depuis le JSON
    fetch('bus_data.json')
        .then(response => response.json())
        .then(data => {
            console.log('Modèles de bus récupérés :', data.bus_models);
            
            // Alimentation de la liste déroulante
            data.bus_models.forEach(model => {
                const option = document.createElement('option');
                option.value = model.name;
                option.textContent = model.name;
                busModelSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Erreur de chargement:', error));

    busForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Récupération des données saisies
        const busModel = busModelSelect.value;
        const batteryAutonomy = parseFloat(document.getElementById('battery-autonomy').value);
        const optionsCost = parseFloat(document.getElementById('options-cost').value);

        console.log('Données saisies :', { busModel, batteryAutonomy, optionsCost });

        // Chargement des données pour le calcul
        fetch('bus_data.json')
            .then(response => response.json())
            .then(data => {
                // Trouver le modèle de bus sélectionné
                const selectedModel = data.bus_models.find(model => model.name === busModel);
                
                console.log('Coût par km :', selectedModel.cost_per_km_autonomy);

                // Calcul du coût total
                const autonomyCost = batteryAutonomy * selectedModel.cost_per_km_autonomy;
                const basePrice = selectedModel.base_price;
                const subsidyRate = data.state_subsidies[0].reduction_percentage;
                
                const totalCost = (basePrice + autonomyCost + optionsCost) * (1 - subsidyRate);

                console.log('Calcul du coût total :', totalCost);

                // Affichage des résultats
                totalCostSpan.textContent = totalCost.toFixed(2);
                resultSection.classList.remove('hidden');
            });
    });
});