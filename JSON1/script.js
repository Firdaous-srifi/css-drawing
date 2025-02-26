fetch('data.json')
.then((response) => response.json())
.then((data) => {
    const affichage = document.getElementById('product-list');
    const btnAffichage = document.getElementById('show-products');
    
    btnAffichage.addEventListener('click', () => {
        affichage.innerHTML=''
        data.forEach(element => {
            const name = document.createElement('div');
            name.textContent = element.name;
            affichage.appendChild(name);
            
        });
        
    });

    const num = document.getElementById('search-id');
    const btnsearch = document.getElementById('find-product');
    const searchresult = document.getElementById('search-result');
    
    btnsearch.addEventListener('click', () => {
        searchresult.innerHTML=""
        findProductById(num.value); 
    });

    function findProductById(id) {
        data.forEach(element => {
            if (element.id === parseInt(id)) {
                const res = document.createElement('div');
                res.textContent = element.name;
                searchresult.appendChild(res);
            }
        });
    }

    const categ =document.getElementById('filter-category')
    const btncateg = document.getElementById('filter-products')
    const resultcateg = document.getElementById('filter-result')

    data.forEach(element => {
        const list =document.createElement('option')
        list.value=element.category;
        list.textContent=element.category;
        categ.appendChild(list)
    });
    btncateg.addEventListener('click',()=>{
        const categvalue = categ.value
        data.forEach(element => {
            if(element.category===categvalue){
                resultcateg.textContent=element.name

            }
        });
    })
    const stock = document.getElementById('calculate-stock')
    const total = document.getElementById('total-stock')    
    stock.addEventListener('click',()=>{
        let somme =0
        data.forEach(element => {
            somme+= element.stock
        });
        total.textContent= somme
    })

    const revenu = document.getElementById('potential-revenue')
    const btnrevenue = document.getElementById('calculate-revenue')
    btnrevenue.addEventListener('click',()=>{
        let somme =0
        data.forEach(element => {
            somme+= (element.stock*element.price)
        });
        revenu.textContent=somme
    })
});
