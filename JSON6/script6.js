fetch('data6.json')
.then((reponse) => reponse.json())
.then((data) => {

    const affichage = document.getElementById('affichage');
    let allProjects = [];

    // Première boucle : collecter tous les projets et les afficher
    Object.keys(data.organization.departments).forEach(dep => {
        const typeDep = data.organization.departments[dep];
        typeDep.projects.forEach(e => {
            allProjects.push({ dep, ...e }); // On ajoute 'dep' aux projets
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${dep}</td>
                <td>${e.name}</td>
                <td>${e.team}</td>
                <td>${e.budget}</td>
                <td>${e.status}</td>
            `;
            affichage.appendChild(tr);
        });    
    });

    const selectStatus = document.getElementById("filterStatus");
    const selectBudget = document.getElementById("sortBudget");
    const btn = document.getElementById('applyFilters');

    btn.addEventListener('click', () => {
        const statut = selectStatus.value;
        const budget = selectBudget.value;

        
        let filteredByStatus = allProjects.filter(e => statut === '' || statut === e.status);

        if (budget === 'asc') {
            filteredByStatus.sort((a, b) => a.budget - b.budget);  // Tri croissant
        } else if (budget === 'desc') {
            filteredByStatus.sort((a, b) => b.budget - a.budget);  // Tri décroissant
        }

        affichage.innerHTML = '';
        filteredByStatus.forEach(e => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${e.dep}</td>  <!-- Utilisation de 'e.dep' au lieu de 'dep' -->
                <td>${e.name}</td>
                <td>${e.team}</td>
                <td>${e.budget}</td>
                <td>${e.status}</td>
            `;
            affichage.appendChild(tr);
        });
    });

})
