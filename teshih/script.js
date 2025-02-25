fetch('electribus.json').then(response => response.json())
    .then(data => {
        const models = data.models;
        const costperKm = data.costPerKm;
        console.log(models);
        console.log(costperKm);

        const select = document.getElementById('dropdwon');

        models.forEach(model => {
            select.innerHTML += `<option value="${model.basePrice}">${model.name}</option>`;

        });

        const submitButon = document.getElementById('sub-btn');
    submitButon.addEventListener('click', ()=>{
        const autonomie = document.getElementById('autonomie').value;
        console.log(autonomie);
        const cout = document.getElementById('cout').value;
        console.log(cout);
        const reduction = document.getElementById('reduction').value;
        console.log(reduction);

        console.log(select.value);

        const coutTotal = Number(select.value) +  ( (Number(autonomie)*Number(costperKm)) + (Number(cout)) - Number(reduction))
        alert(coutTotal)
    })
    })
    .catch(error => console.error(error));

const hambuger_ic = document.getElementById('hamburger');
const navMenu = document.getElementById("navBar");

hambuger_ic.addEventListener('click', () => {

    navMenu.classList.toggle('active');

})