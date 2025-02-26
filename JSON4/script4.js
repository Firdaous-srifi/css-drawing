fetch('data4.json')
.then((reponse)=>reponse.json())
.then((data)=>{
    const select = document.getElementById('city')
    const table = document.getElementById('eventTable')
    Object.keys(data.events).forEach(element => {
        const option = document.createElement('option')
        option.value=element;
        option.textContent=element
        select.appendChild(option)
        
        const type = data.events[element]
        Object.keys(type).forEach(elementt => {
            const soustype = type[elementt]
            soustype.forEach(e => {
                const tr = document.createElement('tr')
                tr.innerHTML=`
                <td>${element}</td>
                <td>${elementt}</td>
                <td>${e.title}</td>
                <td>${e.date}</td>
                <td>${e.price}</td>
                `
                table.appendChild(tr)
            });
        });
    });
        const btn = document.getElementById('filter')
        
        btn.addEventListener('click',()=>{
            const maxprice = document.getElementById('maxPrice').value
            table.innerHTML=''
            const city = select.value
            Object.keys(data.events).forEach(element => { 
                const type = data.events[element]
                Object.keys(type).forEach(elementt => {
                    const soustype = type[elementt]
                    soustype.forEach(e => {
                        if(parseInt(e.price)<=parseInt(maxprice)&& (city===element || city==='all')){
                        const tr = document.createElement('tr')
                        tr.innerHTML=`
                        <td>${element}</td>
                        <td>${elementt}</td>
                        <td>${e.title}</td>
                        <td>${e.date}</td>
                        <td>${e.price}</td>
                        `
                        table.appendChild(tr)
                    }
                    });
                });
            });
        })
})